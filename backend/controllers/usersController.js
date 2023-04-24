const usersDAO = require("../dao/usersDAO");
const userModel = require("../models/userModel"	);
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

// Controller function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await usersDAO.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get a user by ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await usersDAO.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to create a new user
const createUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const currentTime = new Date();
    const existingUser = await userModel.findOne({ email: { $eq: email } });

    if (existingUser) {
      return res.status(400).json({ error: "Người dùng đã tồn tại" });
    }

    // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
    const salt = await bcrypt.genSalt(10); // Tạo
    console.log(salt);
    const hashedPassword = await bcrypt.hash(password, salt); // Mã hóa mật khẩu

    // Tạo người dùng mới với mật khẩu đã được mã hóa
    const newUser = new userModel({
      email: email,
      password: hashedPassword,
      date: currentTime,
    });
    await newUser.save();
    res.status(201).json({ message: "Người dùng đã được tạo" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a user by ID
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const result = await usersDAO.updateUser(userId, updatedUser);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await usersDAO.deleteUser(userId);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
