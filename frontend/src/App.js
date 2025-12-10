import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import GameForm from './components/GameForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bibliothèque de Jeux Vidéo</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<GameList />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="/add" element={<GameForm />} />
            <Route path="/edit/:id" element={<GameForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
