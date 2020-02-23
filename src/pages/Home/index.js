import React, { useEffect, useState } from "react";
import api from "../../services/api";

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
    (async function() {
      try {
        const { data } = await api.get("people", {
          params: { page },
        });
        setPeople([...people, ...data.results]);
        setNextPage(data.next);
      } catch (e) {
        loadHandler()();
        setError(true);
      } finally {
        loadHandler()();
      }
    })();
  }, [page]);

  const loadHandler = function() {
    let loaded = false;
    if (loaded) return;

    return function() {
      loaded = true;
      setLoader(false);
    };
  };

  const handleNextPage = function() {
    setPage(page + 1);
    console.log(page);
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
