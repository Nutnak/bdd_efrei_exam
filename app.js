const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const game = require('./src/router/game')
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = 3000


app.use(express.json());
app.use('/api/games', game)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
    app.listen(port, () => {
      console.log(`Serveur Express écoutant sur le port ${port}`);
    });
  })
  .catch(err => {
    console.error("Erreur de connexion à MongoDB :", err);
    process.exit(1); 
  });
