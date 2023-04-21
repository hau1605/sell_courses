const userModel = require("../models/userModel");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

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
    const emailR = req.body.email;
    const passwordR = req.body.password;
    const currentTime = new Date();
    const existingUser = await userModel.findOne({ email: { $eq: emailR } });

    if (existingUser) {
      return res.status(400).json({ error: "Người dùng đã tồn tại" });
    }

    // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
    const salt = await bcrypt.genSalt(10); // Tạo
    console.log(salt);
    const hashedPassword = await bcrypt.hash(passwordR, salt); // Mã hóa mật khẩu

    // Tạo người dùng mới với mật khẩu đã được mã hóa
    const newUser = new userModel({
      email: emailR,
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
    const result = await userModel.updateUser(userId, updatedUser);
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
    const result = await userModel.deleteUser(userId);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const emailR = req.body.email;
    const passwordR = req.body.password;
    console.log(emailR);
    console.log(passwordR);
    const existingUser = await userModel.findOne({ email: { $eq: emailR } });
    console.log("Tồn tại user: ", existingUser ? true : false);

    if (!existingUser) {
      res.status(401).json({ error: "Tài khoản không tồn tại" });
      console.log("Tài khoản không tồn tại");
    }
    const isMatch = await bcrypt.compare(passwordR, existingUser.password);
    console.log("Mật khẩu đúng: ", isMatch);
    if (!isMatch) {
      res.status(401).json({ error: "Mật khẩu không chính xác" });
    } else {
      res.status(200).json({ message: "Đăng nhập thành công" });
    }
  } catch (err) {
    console.error("Lỗi đăng nhập:", err);
    res.status(500).json({ error: "Đã xảy ra lỗi" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const email = req.body.email;
    // Kiểm tra xem email có tồn tại trong cơ sở dữ liệu hay không
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }

    // Tạo Otp
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    // const otpJwt = jwt.sign({ email, verificationCode }, process.env.JWT_SECRET_KEY, { expiresIn: JWT_EXPIRATION_TIME });
    const expiryTime = new Date(Date.now() + 60 * 60 * 1000);

    // Gửi email chứa đường dẫn đặt lại mật khẩu đến email của người dùng
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "minhhau.uit@gmail.com",
        pass: "tpkkllokrqcejpgs",
      },
    });

    const mailOptions = {
      to: email,
      subject: "Xác nhận đặt lại mật khẩu",
      html: `<p>Mã xác nhận của bạn là: <strong>${verificationCode}</strong></p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Lỗi gửi email" });
      } else {
        console.log("Email sent: " + info.response);
        res.json({
          message: "Mã xác nhận đã được gửi đến địa chỉ email của bạn",
        });
      }
    });

    await userModel.updateOne(
      { email: email },
      { $set: { otpNumber: verificationCode, expiryTime: expiryTime } }
    );
    console.log("Mã OTP đã được lưu vào cơ sở dữ liệu:", verificationCode);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi server" });
  }
};
const confirmOtp = async (req, res) => {
  try {
    const emailResetPassword = req.body.emailResetPassword;
    const verificationCode = req.body.verificationCode;
    console.log("Email: ", emailResetPassword);
    console.log("Mã xác nhận nhập vào: ", verificationCode);
    const user = await userModel.findOne({
      email: { $eq: emailResetPassword },
    });
    console.log("Otp gửi về email: ", user.otpNumber);

    if (verificationCode !== user.otpNumber) {
      return res.status(401).json({ error: "Otp không hợp lệ" });
    } else {
      console.log("Otp còn hiệu lực");
      res.status(200).json({ message: "Otp hợp lệ" });
    }
  } catch {
    console.error("Lỗi kiểm tra mã xác nhận:", err);
    res.status(500).json({ error: "Đã xảy ra lỗi:", err });
  }
};
const resetPassword = async (req, res) => {
  try {
    const emailResetPassword = req.body.emailResetPassword;
    const newPassword = req.body.password;
    console.log("Email: ", emailResetPassword);
    console.log("Mật khẩu mới nhập vào: ", newPassword);

    const user = await userModel.findOne({
      email: { $eq: emailResetPassword },
    });
    // Đổi mật khẩu và lưu vào cơ sở dữ liệu
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Đổi mật khẩu thành công" });
    console.log("Đổi mật khẩu thành công");
  } catch (err) {
    console.error("Lỗi đặt lại mật khẩu:", err);
    res.status(500).json({ error: "Đã xảy ra lỗi:", err });
  }
};
// Update a user's profile
const updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  login,
  forgotPassword,
  confirmOtp,
  resetPassword,
  updateProfile,
};
