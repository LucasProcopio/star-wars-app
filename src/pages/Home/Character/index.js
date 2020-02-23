import React, { useState } from "react";
import PropTypes from "prop-types";

import PerfectScrollbar from "react-perfect-scrollbar";
import { FaJedi } from "react-icons/fa";

import List from "./List";
import SmallLoader from "../../../components/SmallLoader";

import { Header, Container } from "./styles";

const Character = ({ characters, loadMore }) => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <PerfectScrollbar
      onYReachEnd={() => {
        setShowLoader(true);
        loadMore(function(loadNext) {
          if (!loadNext) {
            setShowLoader(false);
          }
        });
      }}
    >
      <Container>
        <Header>
          <FaJedi color="#f5f5f5" size={16} />
          <h2>Characters</h2>
        </Header>

        {characters.map(character => (
          <List key={character.created} character={character} />
        ))}
        {showLoader && <SmallLoader color="#f5f5f5" />}
      </Container>
    </PerfectScrollbar>
  );
};

export default Character;

Character.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  loadMore: PropTypes.func,
  map: PropTypes.arrayOf(
    PropTypes.shape({
      created: PropTypes.string,
    })
  ),
};
