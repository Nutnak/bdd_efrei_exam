import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import gameService from '../services/gameService';

const GameForm = () => {
    const [game, setGame] = useState({
        titre: '',
        editeur: '',
        developpeur: '',
        annee_sortie: '',
        genre: '',
        plateforme: ''
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            gameService.getGameById(id)
                .then(response => {
                    const existingGame = response.data;
                    setGame({
                        ...existingGame,
                        genre: Array.isArray(existingGame.genre) ? existingGame.genre.join(', ') : '',
                        plateforme: Array.isArray(existingGame.plateforme) ? existingGame.plateforme.join(', ') : ''
                    });
                })
                .catch(error => console.error("Erreur lors de la récupération du jeu", error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGame(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = {
            ...game,
            annee_sortie: Number(game.annee_sortie),
            genre: game.genre.split(',').map(item => item.trim()),
            plateforme: game.plateforme.split(',').map(item => item.trim()),
        };

        const promise = id 
            ? gameService.updateGame(id, dataToSubmit) 
            : gameService.createGame(dataToSubmit);

        promise
            .then(() => navigate('/'))
            .catch(error => {
                console.error("Erreur lors de la soumission", error.response ? error.response.data : error);
            });
    };

    return (
        <div>
            <h2>{id ? 'Modifier le jeu' : 'Ajouter un jeu'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Titre:</label>
                    <input type="text" name="titre" value={game.titre} onChange={handleChange} required />
                </div>
                <div>
                    <label>Éditeur:</label>
                    <input type="text" name="editeur" value={game.editeur} onChange={handleChange} required />
                </div>
                <div>
                    <label>Développeur:</label>
                    <input type="text" name="developpeur" value={game.developpeur} onChange={handleChange} required />
                </div>
                <div>
                    <label>Année de sortie:</label>
                    <input type="number" name="annee_sortie" value={game.annee_sortie} onChange={handleChange} required />
                </div>
                <div>
                    <label>Genre (séparés par une virgule):</label>
                    <input type="text" name="genre" value={game.genre} onChange={handleChange} required />
                </div>
                <div>
                    <label>Plateforme (séparées par une virgule):</label>
                    <input type="text" name="plateforme" value={game.plateforme} onChange={handleChange} required />
                </div>
                <button type="submit">{id ? 'Mettre à jour' : 'Créer'}</button>
            </form>
        </div>
    );
};

export default GameForm;
