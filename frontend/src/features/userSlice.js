import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

let userEmail = ""
if (localStorage.getItem("userEmail") !== null) {
    userEmail = JSON.parse(localStorage.getItem("userEmail"));
}
const initialState = {
   emailResetPassword: userEmail
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmailResetPassword: (state, action)=>{
            
            state.emailResetPassword = action.payload;
            localStorage.setItem("userEmail", JSON.stringify(state.emailResetPassword));
        }
    }
});
export const { setEmailResetPassword } = userSlice.actions;
export default userSlice.reducer;