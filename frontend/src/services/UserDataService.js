import axios from "axios";

class UserDataService {
    postLogin(email, password) {
        return axios.post(`http://localhost:8000/api/users/login`, (email, password))
    }
    postSendMail(email, password) {
        return axios.post(`http://localhost:8000/api/users/forgot-password`, (email, password))
    }
    postConfirmOtp(emailResetPassword, verificationCode) {
        return axios.post(`http://localhost:8000/api/users/reset-password/confirmOtp`, (emailResetPassword, verificationCode))
    }
    postNewPassword(emailResetPassword, password) {
        return axios.post(`http://localhost:8000/api/users/reset-password`, (emailResetPassword, password))
    }
}       

export default new UserDataService();