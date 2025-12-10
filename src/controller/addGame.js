const Game = require('../model/game.js');

const createGame = async (req, res) => {

    try {
        const gameData = req.body; 

        const newGame = await Game.create(gameData);
        
        return res.status(201).json(newGame);

    } catch (error) {
        console.error("Erreur lors de la création du jeu :", error);
        return res.status(400).json({ 
            message: "Échec de la création du jeu", 
            error: error.message 
        });
    }
}

module.exports = createGame;