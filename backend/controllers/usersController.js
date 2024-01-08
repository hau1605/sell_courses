import * as usersDAO from "../dao/usersDAO.js";
import userModel from "../models/userModel.js";
import Course from "../models/courseModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from "../config/config.js";

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

// Controller function to get a user by email
const getUserByEmail = async (req, res) => {
  try {
    const emailR = req.params.email;
    console.log("Thông tin user: ", emailR);
    const user = await userModel.findOne(
      { email: { $eq: emailR } },
      { password: 0, otpNumber: 0, expiryTime: 0 }
    );

    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng!" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Controller function to create a new user
const createUser = async (req, res) => {
  try {
    const emailR = req.body.email;
    const passwordR = req.body.password;
    const nameR = req.body.fullName;
    const phoneNumberR = req.body.phoneNumber;
    const currentTime = new Date();
    const existingUser = await userModel.findOne({ email: { $eq: emailR } });

    if (existingUser) {
      console.log("Người dùng đã tồn tại");
      return res.status(400).json({ error: "Người dùng đã tồn tại" });
    }

    // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
    const salt = await bcrypt.genSalt(10); // Tạo
    console.log("Salt: ", salt);
    const hashedPassword = await bcrypt.hash(passwordR, salt); // Mã hóa mật khẩu

    const refreshToken = jwt.sign({ emailR }, JWT_SECRET_KEY, { expiresIn: '30d' });
    console.log("refreshToken: ", refreshToken);

    // Tạo người dùng mới với mật khẩu đã được mã hóa
    const newUser = new userModel({
      email: emailR,
      password: hashedPassword,
      name: nameR,
      phoneNumber: phoneNumberR,
      date: currentTime,
      refreshToken: refreshToken,
    });
    await newUser.save();
    res.status(201).json({ message: "Người dùng đã được tạo" });
    console.log("Tạo người dùng mới thành công");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a user by email
const updateUser = async (req, res) => {
  try {
    const userEmail = req.params.email;
    console.log(userEmail);
    const updatedUser = req.body;
    console.log(updatedUser);
    const result = await userModel.updateOne(
      { email: userEmail },
      {
        phoneNumber: updatedUser.phoneNumber,
        name: updatedUser.name,
        gender: updatedUser.gender,
      }
    );
    console.log(result);
    if (!result) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    res.status(200).json({ message: "Cập nhật thành công" });
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

const changePassword = async (req, res) => {
  try {
    const emailR = req.params.email;
    console.log("Email đổi mk: ", emailR);
    const oldPasswordR = req.body.oldPassword;
    console.log("Mật khẩu cũ nhập vào: ", oldPasswordR);
    const newPasswordR = req.body.newPassword;
    console.log("Mật khẩu mới nhập vào: ", newPasswordR);
    const existingUser = await userModel.findOne({ email: { $eq: emailR } });
    console.log("Tồn tại user?: ", existingUser ? true : false);

    if (!existingUser) {
      console.log("Tài khoản không tồn tại");
      return res.status(404).json({ error: "Tài khoản không tồn tại" });
    }

    const isMatch = await bcrypt.compare(oldPasswordR, existingUser.password);
    console.log("Mật khẩu đúng?: ", isMatch);
    if (!isMatch) {
      console.log("Mật khẩu cũ không đúng ");
      res.status(401).json({ error: "Mật khẩu cũ không đúng " });
    } else {
      // Đổi mật khẩu và lưu vào cơ sở dữ liệu
      const hashedPassword = await bcrypt.hash(newPasswordR, 10);
      existingUser.password = hashedPassword;
      await existingUser.save();
      res.status(200).json({ message: "Đổi mật khẩu thành công" });
      console.log("hashedPassword: ", hashedPassword);
      console.log("Đổi mật khẩu thành công");
    }
  } catch (error) {
    console.log("Lỗi đổi mật khẩu:", error);
    console.error("Lỗi đổi mật khẩu:", error);
    res.status(500).json({ error: "Đã xảy ra lỗi" });
  }
};
const getPurchasedCourses = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.findById(userId).populate("purchasedCourses");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const purchasedCourses = user.purchasedCourses;
    res.json({ purchasedCourses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  changePassword,
  getPurchasedCourses,
};
