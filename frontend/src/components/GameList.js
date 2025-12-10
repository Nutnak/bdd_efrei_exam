import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gameService from '../services/gameService';

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        loadGames();
    }, []);

    const loadGames = () => {
        gameService.getAllGames()
            .then(response => {
                setGames(response.data);
            })
            .catch(error => console.error("Erreur lors de la récupération des jeux", error));
    };

    const handleDelete = (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce jeu ?')) {
            gameService.deleteGame(id)
                .then(() => {
                    loadGames(); // Recharge la liste après suppression
                })
                .catch(error => console.error("Erreur lors de la suppression du jeu", error));
        }
    };

    return (
        <div>
            <Link to="/add" className="add-link">Ajouter un nouveau jeu</Link>
            <ul>
                {games.map(game => (
                    <li key={game._id}>
                        <Link to={`/game/${game._id}`}>{game.titre}</Link>
                        <div>
                            <Link to={`/edit/${game._id}`} style={{backgroundColor: '#ffc107', padding: '8px 12px', color: 'black', borderRadius: '4px'}}>Modifier</Link>
                            <button onClick={() => handleDelete(game._id)}>Supprimer</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameList;
