import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FaJedi } from "react-icons/fa";

import List from "./List";

import { Spinner, Header } from "./styles";

const Character = ({ characters, loadMore }) => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <>
      <Header>
        <FaJedi color="#f5f5f5" size={16} />
        <h2>Characters</h2>
      </Header>
      <PerfectScrollbar
        onYReachEnd={() => {
          setShowLoader(false);
          loadMore(function() {
            setShowLoader(true);
          });
        }}
      >
        {characters.map(character => (
          <List key={character.created} character={character} />
        ))}
        {showLoader && (
          <Spinner>
            <FaJedi color="#f5f5f5" size={24} />
          </Spinner>
        )}
      </PerfectScrollbar>
    </>
  );
};

export default Character;
