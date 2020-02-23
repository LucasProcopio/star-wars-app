import axios from "axios";
import { fetchIdfromUrl } from "../lib";

const api = axios.create({
  baseURL: "https://swapi.co/api/",
});

export const fetch = async function(page, callback) {
  const response = {};
  try {
    const { data } = await api.get("people", {
      params: { page },
    });

    data.results.forEach(function(character, key) {
      const characterId = fetchIdfromUrl(character.url);
      data.results[
        key
      ].image = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
    });

    response.data = data;
    callback(response, false);
  } catch (e) {
    callback(response, true);
  }
};

export const fetchAll = async function(items, callback) {
  const data = [];

  try {
    const requests = items.map(item => {
      return api.get(item.replace("https://swapi.co/api/", ""));
    });

    const responses = await axios.all(requests);

    responses.map(response => {
      const starshipId = fetchIdfromUrl(response.data.url);

      response.data.image = `https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`;
      response.data.placeholder = `https://starwars-visualguide.com/assets/img/placeholder-small.jpg`;

      data.push(response.data);
    });
    callback(data, false);
  } catch (e) {
    callback(data, true);
  }
};
