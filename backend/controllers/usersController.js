const userModel = require("../models/userModel");
const usersDAO = require("../dao/usersDAO");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
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
const getUserByEmail = async (req, res) => {
  try {
    const emailR = req.params.email;
    console.log(emailR);
    const user = await userModel.findOne({ email: { $eq: emailR } }, { password: 0, otpNumber: 0, expiryTime: 0 });

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
    console.log(salt);
    const hashedPassword = await bcrypt.hash(passwordR, salt); // Mã hóa mật khẩu

    // Tạo người dùng mới với mật khẩu đã được mã hóa
    const newUser = new userModel({
      email: emailR,
      password: hashedPassword,
      name: nameR,
      phoneNumber: phoneNumberR,
      date: currentTime,
    });
    await newUser.save();
    res.status(201).json({ message: "Người dùng đã được tạo" });
    console.log("Tạo người dùng mới thành công");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a user by ID
const updateUser = async (req, res) => {
  try {
    const userEmail = req.params.email;
    console.log(userEmail)
    const updatedUser = req.body;
    console.log(updatedUser)
    const result = await userModel.updateOne({email: userEmail} , 
                                              {phoneNumber: updatedUser.phoneNumber, 
                                                name: updatedUser.name,
                                                gender: updatedUser.gender});
    console.log(result)
    if (!result) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    res.status(200).json({ message: "Cập nhật thành công" });
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
      res.status(404).json({ error: "Tài khoản không tồn tại" });
      console.log("Tài khoản không tồn tại");
    }

    const isMatch = await bcrypt.compare(oldPasswordR, existingUser.password);
    console.log("Mật khẩu đúng?: ", isMatch);
    if (!isMatch) {
      res.status(401).json({ error: "Mật khẩu cũ không đúng "});
      console.log("Mật khẩu cũ không đúng ");
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

const login = async (req, res) => {
  try {
    const emailR = req.body.email;
    const passwordR = req.body.password;
    console.log(emailR);
    console.log(passwordR);
    const existingUser = await userModel.findOne({ email: { $eq: emailR } });
    console.log("Tồn tại user?: ", existingUser ? true : false);

    if (!existingUser) {
      res.status(401).json({ error: "Tài khoản không tồn tại" });
      console.log("Tài khoản không tồn tại");
    }
    bcrypt.compare(passwordR, existingUser.password, (err, isMatch) => {
      console.log("Mật khẩu đúng?: ", isMatch);
      if (!isMatch) {
        res.status(401).json({ error: "Mật khẩu không chính xác ", err });
      } else {
        res.status(200).json({ message: "Đăng nhập thành công" });
      }
    });
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
  } catch (err) {
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
const logout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      res.clearCookie('sessionId');
      res.status(200).json({ message: "Đã đăng xuất" });
      console.log("Đã đăng xuất!");
      res.redirect('/');
    })
  } catch (err) {
    console.log("Lỗi đăng xuất:", err);
    res.status(500).json({ error: "Đã xảy ra lỗi:", err });
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  changePassword,
  deleteUser,
  login,
  forgotPassword,
  confirmOtp,
  resetPassword,
  logout,
};
