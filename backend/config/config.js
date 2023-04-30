import dotenv from 'dotenv'; // Load environment variables from .env file

dotenv.config();

export const CONNECTION_STRING = process.env.CONNECTION_STRING; // Database configuration

export const DB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

export const PORT = process.env.PORT; //PORT

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY; // JWT configuration

export const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME;
