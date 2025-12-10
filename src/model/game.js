const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  
  titre: {
    type: String,
    required: [true, "Le titre du jeu est obligatoire."],
    trim: true, 
    unique: true
  },
  
  editeur: {
    type: String,
    trim: true,
    required: true
  },
  
  developpeur: {
    type: String,
    trim: true,
    required: true
  },
  
  annee_sortie: {
    type: Number,
    required: true,
    min: [1970, "L'année de sortie doit être postérieure à 1970."],
    max: [new Date().getFullYear(), "L'année de sortie ne peut pas être future."]
  },
  
  metacritic_score: {
    type: Number,
    min: [0, "Le score Metacritic ne peut pas être inférieur à 0."],
    max: [100, "Le score Metacritic ne peut pas être supérieur à 100."],
    default: null
  },
  
  temps_jeu_heures: {
    type: Number,
    min: [0, "Le temps de jeu doit être un nombre positif."],
    required: false
  },
  
  genre: {
    type: [String],
    required: true,
  },
  
  plateforme: {
    type: [String],
    required: true,
  },
    
  termine: {
    type: Boolean,
    default: false 
  }
}, 
{
  timestamps: true // Ajoute automatiquement les champs 'createdAt' et 'updatedAt'
});



const Game = mongoose.model('Game', gameSchema)

module.exports = Game;