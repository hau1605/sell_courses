const mongoose = require('mongoose');

// Replace the connection string with your MongoDB Atlas connection string
const CONNECTION_STRING = 'mongodb+srv://hau165:Minhhau165@cluster0.zdekj4w.mongodb.net/BanKhoaHoc?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING, {
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

