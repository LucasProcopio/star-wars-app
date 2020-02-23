import React from "react";

import PerfectScrollbar from "react-perfect-scrollbar";

import List from "./List";

const Character = ({ characters, loadMore }) => {
  console.log(loadMore);
  return (
    <>
      <h2>Characters</h2>
      <PerfectScrollbar
        onYReachEnd={container => {
          //loadMore();
          console.log(`scrolled to: ${container.scrollTop}.`);
        }}
      >
        {characters.map(character => (
          <List key={character.created} character={character} />
        ))}
      </PerfectScrollbar>
    </>
  );
};

export default Character;
