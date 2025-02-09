const express = require('express');
const { getAllAnimals, getAnimalById, createAnimal } = require('../controller/AnimalController');
const authMiddleware = require('../Middlewares/authMiddleware');
const Animal = require('../Models/Animal');

const router = express.Router();

router.get('/', getAllAnimals);
router.get('/:id', getAnimalById);
router.post('/', createAnimal);
// Backend route to fetch multiple animals by IDs
router.post("/ads", async (req, res) => {
    try {
      const { animalIds } = req.body;
  
      // Fetch animals whose IDs are in the animalIds array
      const animals = await Animal.find({ _id: { $in: animalIds } });
  
      res.status(200).json(animals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
module.exports = router;