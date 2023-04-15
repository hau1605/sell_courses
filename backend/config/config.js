require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  // Database configuration
  CONNECTION_STRING: process.env.CONNECTION_STRING,
  DB_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  //PORT
  PORT: process.env.PORT,

  // JWT configuration
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME,
};
