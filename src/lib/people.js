import api from "../services/api";

export async function getPeople(people, page, setPeople, setNext) {
  try {
    const { data } = await api.get("people", {
      params: { page },
    });
    setPeople([...people, ...data.results]);
    setNext(data.next);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("success");
  }
}

export function getCharacterId(characterUrl) {
  return characterUrl.match(/\d+/g)[0];
}
