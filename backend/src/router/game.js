const express = require('express')
const router = express.Router()
const createGame = require('../controller/addGame')
const readGame = require('../controller/readGames')
const readOneGame = require('../controller/readOneGame')
const updateGame = require('../controller/updateGame')
const deleteGame = require('../controller/deleteGame')

router.get('/', readGame)
router.post('/', createGame)
router.get('/:id', readOneGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)

module.exports = router
