const express = require('express');

const bcrypt = require('bcryptjs');

const app = express();

app.use(express.json());

const users = [];

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide both username and password' });
  }

  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = { username, password: hashedPassword };

  users.push(user);

  res.status(201).json({ message: 'User created' });
});
