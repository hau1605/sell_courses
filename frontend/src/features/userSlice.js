import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

let userEmail = "";
let emailLS = null;
let isLoggedInLS = false;
if (localStorage.getItem("userEmail") !== null) {
    userEmail = JSON.parse(localStorage.getItem("userEmail"));
}
if (localStorage.getItem("email") !== null && localStorage.getItem("isLoggedInLS") !== false) {
    emailLS = JSON.parse(localStorage.getItem("email"));
    isLoggedInLS = JSON.parse(localStorage.getItem("isLoggedIn"));
}
const initialState = {
    emailResetPassword: userEmail, 
    isLoggedIn: isLoggedInLS,
    email: emailLS,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmailResetPassword: (state, action)=>{
            state.emailResetPassword = action.payload;
            localStorage.setItem("userEmail", JSON.stringify(state.emailResetPassword));
        },
        setNullEmailResetPassword: (state)=>{
            state.emailResetPassword = null;
            localStorage.removeItem("userEmail");
        },
        loginSuccess(state, action) {
            state.isLoggedIn = true;
            state.email = action.payload;
            localStorage.setItem("email", JSON.stringify(state.email));
            localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
          },
        logoutSuccess(state) {
            state.isLoggedIn = false;
            state.email = null;
            localStorage.removeItem("email");
            localStorage.removeItem("isLoggedIn");
          },
    }
});
export const { setEmailResetPassword,setNullEmailResetPassword, loginSuccess, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;