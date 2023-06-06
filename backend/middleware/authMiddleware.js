import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/config.js'; // Import the secret key from config or environment variable

// const refreshToken = jwt.sign({ emailR }, JWT_SECRET_KEY, { expiresIn: '30d' });
// const accessToken = jwt.sign({ emailR }, JWT_SECRET_KEY, { expiresIn: '1d' });

const signAccessToken = async () => {
  const payload = {
    userId: 1,
    name: "Minh Hau"
  }
  const token = await jwt.sign(payload, accessToken, {expiresIn: '1d'});
}

const signRefreshToken = async () => {
  
}


const verifyToken = async (req, res, next) => {
  return res.status(200).json({
    code: 401,
    msg: "Invalid Token"
  })
}

// Middleware function to verify JWT token
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization'); // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    req.user = user; // Attach user object to the request for further use
    next(); // Call next middleware function
  });
};

export {
  authenticateJWT,
  signAccessToken,
  signRefreshToken,
  verifyToken,
}