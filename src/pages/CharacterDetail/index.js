import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { fetchAll } from "../../services/api";
import { GoChevronLeft } from "react-icons/go";
import { FaJedi } from "react-icons/fa";
import SmallLoader from "../../components/SmallLoader";
import Error from "../../components/Error";

import {
  Container,
  CharacterInfo,
  CharacterImage,
  Details,
  StarshipsContainer,
  List,
  Item,
  StarshipImage,
  NoStarShipImage,
  NoStarShips,
  Header,
} from "./styles";

export default function CharacterDetail({ location, history }) {
  const { character } = location.state;

  const [starships, setStarShip] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (function fetchStarShips() {
      setLoader(true);
      fetchAll(character.starships, function(data, error) {
        setStarShip(data);
        setLoader(false);
        setError(error);
      });
    })();
  }, []); // eslint-disable-line

  return (
    <Container>
      <Header>
        <button onClick={() => history.goBack()}>
          <GoChevronLeft color="#f5f5f5" size={24} />
        </button>
        <FaJedi color="#f5f5f5" size={20} />
      </Header>
      <CharacterInfo>
        <CharacterImage img={character.image} />
        <Details>
          <h2>{character.name}</h2>
          <p>
            Birth year: <span>{character.birth_year}</span>
          </p>
          <p>
            Gender: <span>{character.gender}</span>
          </p>
          <p>
            Height: <span>{character.height}</span>
          </p>
          <p>
            Mass: <span>{character.mass}</span>
          </p>
          <p>
            Hair color: <span>{character.hair_color}</span>
          </p>
          <p>
            Skin color: <span>{character.skin_color}</span>
          </p>
          <p>
            Eye color: <span>{character.eye_color}</span>
          </p>
        </Details>
      </CharacterInfo>
      <StarshipsContainer>
        <h2>Starships</h2>

        {loader ? (
          <SmallLoader color="#333" message="Patience you must have." />
        ) : error ? (
          <Error />
        ) : (
          <List>
            {starships.map(starship => (
              <Item key={starship.name}>
                <StarshipImage
                  src={starship.image}
                  alt={starship.name}
                  onError={e => {
                    e.target.src = starship.placeholder;
                  }}
                />
                <p>{starship.name}</p>
              </Item>
            ))}
          </List>
        )}

        {!starships.length > 0 && !loader && !error && (
          <NoStarShips>
            <NoStarShipImage />
            <p>No Star ship {character.name} has my youg padawan!</p>
          </NoStarShips>
        )}
      </StarshipsContainer>
    </Container>
  );
}

CharacterDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
  character: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    starships: PropTypes.arrayOf(PropTypes.object),
  }),
};
