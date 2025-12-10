import axios from 'axios';

const API_URL = 'http://localhost:3000/api/games'; // Assurez-vous que le port est correct

const getAllGames = () => {
    return axios.get(API_URL);
};

const getGameById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const createGame = (gameData) => {
    return axios.post(API_URL, gameData);
};

const updateGame = (id, gameData) => {
    return axios.put(`${API_URL}/${id}`, gameData);
};

const deleteGame = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

const gameService = {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame
};

export default gameService;
