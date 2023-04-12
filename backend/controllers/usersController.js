const userModel = require('../models/userModel');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Controller function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get a user by ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to create a new user
const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const createdUser = await userModel.createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a user by ID
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const result = await userModel.updateUser(userId, updatedUser);
    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await userModel.deleteUser(userId);
    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    // Nhận email từ yêu cầu của người dùng
    const { email } = req.body;
    // Kiểm tra xem email có tồn tại trong cơ sở dữ liệu hay không
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Không tìm thấy người dùng' });
    }
    // Tạo mã thông báo đặt lại mật khẩu
    const token = jwt.sign({ email }, 'SECRET_KEY', { expiresIn: '1h' });
    // Gửi email chứa đường dẫn đặt lại mật khẩu đến email của người dùng
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Sử dụng kết nối không an toàn (false) hoặc an toàn (true)
      auth: {
        user: 'minhhau.uit@gmail.com',
        pass: 'anizmndbuctfyqsl'
      }
    });
    const mailOptions = {
      from: 'minhhau.uit@gmail.com',
      to: email,
      subject: 'Đặt lại mật khẩu',
      html: `<p>Chào bạn,</p><p>Click vào đường dẫn sau để đặt lại mật khẩu:</p><p><a href="http://localhost:3000/api/reset-password/${token}">http://localhost:3000/api/reset-password/${token}</a></p><p>Chúng tôi khuyến khích bạn đổi mật khẩu sau khi đặt lại thành công.</p><p>Trân trọng,</p><p>Đội ngũ quản trị viên</p>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Lỗi gửi email' });
      }
      console.log('Đã gửi email đặt lại mật khẩu:', info.response);
      return res.json({ message: 'Đã gửi email đặt lại mật khẩu' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi server' });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  resetPassword
};

