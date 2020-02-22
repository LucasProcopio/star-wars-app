import React, { useMemo } from "react";

import { Container, CharacterImage, CharacterName } from "./styles";
import { getCharacterId } from "../../../lib/people";

const Character = ({ character }) => {
  const id = useMemo(() => getCharacterId(character.url), [character.url]);

  return (
    <Container>
      <CharacterImage
        img={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />
      <CharacterName>{character.name}</CharacterName>
    </Container>
  );
};

export default Character;
