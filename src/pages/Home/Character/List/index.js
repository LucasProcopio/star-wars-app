import React from "react";
import PropTypes from "prop-types";

import { Container, CharacterImage, CharacterName } from "./styles";

const List = ({ character }) => {
  return (
    <Container
      to={{
        pathname: "character/details",
        state: {
          character: character,
        },
      }}
    >
      <CharacterImage img={character.image} />
      <CharacterName>{character.name}</CharacterName>
    </Container>
  );
};

export default List;

List.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};
