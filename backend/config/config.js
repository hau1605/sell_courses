module.exports = {
  // Database configuration
  DB_HOST: 'mongodb+srv://<username>:<password>@<cluster-url>/<database-name>', // MongoDB Atlas connection string
  DB_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },

  // JWT configuration
  JWT_SECRET_KEY: 'your-secret-key', // Secret key for JWT
  JWT_EXPIRATION_TIME: '1h' // JWT token expiration time
};
