const baseUrl: string = "https://rickandmortyapi.com/api/";
const character: string = baseUrl + "character/";

export const getMorty = () => {
  return fetch(character + "2").then((res) => res.json());
};
