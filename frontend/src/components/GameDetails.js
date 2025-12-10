import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import gameService from '../services/gameService';

const GameDetails = () => {
    const [game, setGame] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        gameService.getGameById(id)
            .then(response => {
                setGame(response.data);
            })
            .catch(error => console.error("Erreur lors de la récupération des détails du jeu", error));
    }, [id]);

    if (!game) return <div>Chargement...</div>;

    return (
        <div className="game-details">
            <h1>{game.titre}</h1>
            <p><strong>Éditeur:</strong> {game.editeur}</p>
            <p><strong>Développeur:</strong> {game.developpeur}</p>
            <p><strong>Année de sortie:</strong> {game.annee_sortie}</p>
            <p><strong>Genre:</strong> {Array.isArray(game.genre) ? game.genre.join(', ') : game.genre}</p>
            <p><strong>Plateforme:</strong> {Array.isArray(game.plateforme) ? game.plateforme.join(', ') : game.plateforme}</p>
            <div className="nav-links">
                <Link to={`/edit/${game._id}`}>Modifier</Link>
                <Link to="/">Retour à la liste</Link>
            </div>
        </div>
    );
};

export default GameDetails;
