const Game = require('../model/game.js');

const readGames = async (req, res) => {

    try {

        const newGame = await Game.find({});
        
        return res.status(201).json(newGame);

    } catch (error) {
        console.error("Erreur lors de l'affichage des jeux :", error);
        return res.status(400).json({ 
            message: "Échec de la liste des jeux", 
            error: error.message 
        });
    }
}

module.exports = readGames;