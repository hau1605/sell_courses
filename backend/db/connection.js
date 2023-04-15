const mongoose = require('mongoose');
const config = require('../config/config.js');

// Connect to MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(config.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

