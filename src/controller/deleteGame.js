const Game = require('../model/game.js');

const deleteGame = async (req, res) => {

    try {
        const gameId = req.params.id;

        if(!gameId){
            return res.status(400).json({message: "Aucun id n'est renseigné dans votre demande."})
        }
        
        const deleteGame = await Game.findOneAndDelete({_id: gameId});
        
        return res.status(201).json({message: "jeu supprimé."});

    } catch (error) {
        console.error("Erreur lors de l'affichage des jeux :", error);
        return res.status(400).json({ 
            message: "Échec de la liste des jeux", 
            error: error.message 
        });
    }
}

module.exports = deleteGame;