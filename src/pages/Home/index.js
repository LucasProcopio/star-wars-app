import React, { useEffect, useState } from "react";
import { fetch } from "../../services/api";

import { Container } from "./styles";
import Character from "./Character";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

export default function Home() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState("");
  const [loader, setLoader] = useState(true);
  const [loadNext, setLoadNext] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (function() {
      fetch(page, function(response, error) {
        const { data } = response;

        if (typeof data !== "undefined") {
          setPeople([...people, ...data.results]);
          setNextPage(data.next);
        }

        setLoadNext(false);
        setError(error);
        loadHandler()();
      });
    })();
  }, [page]); // eslint-disable-line

  const loadHandler = function() {
    let isLoaded = false;

    return function() {
      if (!isLoaded) {
        isLoaded = true;
        setLoader(false);
      }
    };
  };

  const handleNextPage = function(callback) {
    if (!loadNext && nextPage) {
      setLoadNext(true);
      setPage(page + 1);
      callback();
    }
  };

  return (
    <Container>
      {loader ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <Character characters={people} loadMore={handleNextPage} />
      )}
    </Container>
  );
}
