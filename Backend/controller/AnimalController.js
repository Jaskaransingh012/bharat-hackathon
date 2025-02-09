const Animal = require('../Models/Animal');
const User = require('../Models/UserModel');

async function getAllAnimals(req, res) {
    try {
        const { breed, minAge, maxAge, gender, minPrice, maxPrice, sort } = req.query;
        const filter = {};
        const sortOptions = {};

        // Build filter
        if (breed) filter.breed = breed;
        if (gender) filter.gender = gender;
        if (minAge || maxAge) {
            filter.age = {};
            if (minAge) filter.age.$gte = parseInt(minAge);
            if (maxAge) filter.age.$lte = parseInt(maxAge);
        }
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = parseFloat(minPrice);
            if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
        }

        // Build sort options
        if (sort) {
            const [sortField, sortOrder] = sort.split('_');
            sortOptions[sortField] = sortOrder === 'desc' ? -1 : 1;
        }

        const animals = await Animal.find(filter).sort(sortOptions);
        res.json(animals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAnimalById(req, res) {
    try {
        const animal = await Animal.findById(req.params.id);
        if (!animal) return res.status(404).json({ message: 'Animal not found' });
        res.json(animal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createAnimal(req, res) {
    try {
        const { title, price, description, category, location, userId, image } = req.body;

        console.log("Received User ID:", userId); // Debugging log

        if (!userId) {
            return res.status(400).json({ message: "User ID is missing from request" });
        }

        // Create the new Animal document
        const newAnimal = new Animal({
            title,
            price,
            description,
            category,
            location,
            postedBy: userId,
            image
        });

        // Save the new Animal document
        const savedAnimal = await newAnimal.save();

        // Find the User document and push the new Animal's _id to the ads array
        const user = await User.findByIdAndUpdate(
            userId,
            { $push: { animals: savedAnimal._id } },
            { new: true } // Return the updated user document
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with the saved Animal document
        res.status(201).json(savedAnimal);
    } catch (error) {
        console.error("Error creating animal:", error);
        res.status(500).json({ message: error.message });
    }
}


module.exports = { getAllAnimals, getAnimalById, createAnimal };