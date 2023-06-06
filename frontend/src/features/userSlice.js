import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

let emailRSP = "";
let userIdLS = "";
let emailLS = null;
let userNameLS = "";
let isLoggedInLS = false;
if (localStorage.getItem("emailRSP") !== null) {
    emailRSP = JSON.parse(localStorage.getItem("emailRSP"));
}
if (localStorage.getItem("email") !== null && localStorage.getItem("isLoggedInLS") !== false) {
    userIdLS = JSON.parse(localStorage.getItem("userId"));
    emailLS = JSON.parse(localStorage.getItem("email"));
    userNameLS = JSON.parse(localStorage.getItem("userName"));
    isLoggedInLS = JSON.parse(localStorage.getItem("isLoggedIn"));
}
const initialState = {
    emailResetPassword: emailRSP, 
    isLoggedIn: isLoggedInLS,
    email: emailLS,
    userId: userIdLS,
    userName: userNameLS,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmailResetPassword: (state, action)=>{
            state.emailResetPassword = action.payload;
            localStorage.setItem("emailRSP", JSON.stringify(state.emailResetPassword));
        },
        setNullEmailResetPassword: (state)=>{
            state.emailResetPassword = null;
            localStorage.removeItem("emailRSP");
        },

        loginSuccess(state, action) {
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            localStorage.setItem("email", JSON.stringify(state.email));
            localStorage.setItem("userId", JSON.stringify(state.userId));
            localStorage.setItem("userName", JSON.stringify(state.userName));
            localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
        },
        logoutSuccess(state) {
            state.isLoggedIn = false;
            state.email = null;
            state.userId = null;
            state.userName = null;
            localStorage.removeItem("email");
            localStorage.removeItem("userId");
            localStorage.removeItem("userName");
            localStorage.removeItem("isLoggedIn");
        },
    }
});
export const { setEmailResetPassword,setNullEmailResetPassword, loginSuccess, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;