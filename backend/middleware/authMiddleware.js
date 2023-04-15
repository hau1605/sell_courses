const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config.js'); // Import the secret key from config or environment variable

// Middleware function to verify JWT token
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization'); // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    req.user = user; // Attach user object to the request for further use
    next(); // Call next middleware function
  });
};

module.exports = authenticateJWT;

