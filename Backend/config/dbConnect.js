const mongoose = require('mongoose');

async function connectToDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/vetVilla');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

module.exports = connectToDB;