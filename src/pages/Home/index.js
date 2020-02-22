import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { Container } from "./styles";
import Character from "./Character";

export default function Home() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState("");
  const [loader, setLoader] = useState(false);
  const [loadNext, setLoadNext] = useState(false);

  useEffect(() => {
    (async function() {
      try {
        const { data } = await api.get("people", {
          params: { page },
        });
        setPeople([...people, ...data.results]);
        setNextPage(data.next);
      } catch (e) {
        console.log(e);
      } finally {
        console.log("success");
      }
    })();
  }, [page]);

  return (
    <Container>
      <h2>Characters</h2>
      {/* TODO: Loader , char information */}
      {people.map(character => (
        <Character key={character.created} character={character} />
      ))}
    </Container>
  );
}
