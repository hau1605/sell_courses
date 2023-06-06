import axios from "axios";
import { BASE_URL } from "../config/config";

class UserDataService {
    postLogin(email, password) {
        return axios.post(`${BASE_URL}/api/users/login`, (email, password))
    }
    postSendMail(email, password) {
        return axios.post(`${BASE_URL}/api/users/forgot-password`, (email, password))
    }
    postConfirmOtp(emailResetPassword, verificationCode) {
        return axios.post(`${BASE_URL}/api/users/reset-password/confirmOtp`, (emailResetPassword, verificationCode))
    }
    postNewPassword(emailResetPassword, password) {
        return axios.post(`${BASE_URL}/api/users/reset-password`, (emailResetPassword, password))
    }
}       

export default new UserDataService();