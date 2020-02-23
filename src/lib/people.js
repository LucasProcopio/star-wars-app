export function getCharacterId(characterUrl) {
  return characterUrl.match(/\d+/g)[0];
}
