import axios from "axios";

//https://rawg.io/@kilundi/apikey
//https://api.rawg.io/api/genres?key=4f30487d027245a4b1c096a53f514415

//https://api.rawg.io/api/games

const key = '4f30487d027245a4b1c096a53f514415';

const gamingApi = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

const genresList = gamingApi.get(`/genres?key=${key}`);
const gamesList = gamingApi.get(`/games?key=${key}`);
const getGamesByGenreId = (id) => gamingApi.get(`/games?key=${key}&genres=${id}`)
export default { genresList, gamesList, getGamesByGenreId };


// export const genresResponse = async () => {
//     const response = await fetch(`https://api.rawg.io/api/genres?key=${key}`);
//     return await response;
// };
