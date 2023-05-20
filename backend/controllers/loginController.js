import userModel from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    const existingUser = await userModel.findOne({ email: { $eq: email } });
    console.log("Tồn tại user: ", existingUser ? true : false);

    if (!existingUser) {
      res.status(401).json({ error: "Tài khoản không tồn tại" });
      console.log("Tài khoản không tồn tại");
    }

    // Compare the password with the hash
    bcrypt.compare(password, existingUser.password, function (err, result) {
      // If there is an error, handle it
      if (err) {
        console.error(err);
        return;
      }

      // If result is true, the password is correct
      if (result) {
        res.status(200).json({ message: "Đăng nhập thành công" });
      } else {
        res.status(401).json({ error: "Mật khẩu không chính xác" });
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
        pass: "vyzgpxblasanronc",
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
      res.clearCookie("sessionId");
      res.status(200).json({ message: "Đã đăng xuất" });
      console.log("Đã đăng xuất!");
      res.redirect("/");
    });
  } catch (err) {
    console.log("Lỗi đăng xuất:", err);
    res.status(500).json({ error: "Đã xảy ra lỗi:", err });
  }
};
export {
  login,
  forgotPassword,
  confirmOtp,
  resetPassword,
  logout,
};
