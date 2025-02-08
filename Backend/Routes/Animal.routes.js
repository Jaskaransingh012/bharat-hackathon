const express = require('express');
const { getAllAnimals, getAnimalById, createAnimal } = require('../controller/AnimalController');
const authMiddleware = require('../Middlewares/authMiddleware');

const router = express.Router();

router.get('/', getAllAnimals);
router.get('/:id', getAnimalById);
router.post('/', createAnimal);

module.exports = router;