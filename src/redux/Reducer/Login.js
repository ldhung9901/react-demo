import Axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");
const { FaSadCry } = require("react-icons/fa");

const login = createSlice({
  name: "login",
  initialState: { showLogin: false, loggedInState: false, userName: null },
  reducers: {
    toggleLoginForm: (state, action) => {
      state.showLogin = !state.showLogin;
    },
    IslogIn: (state, action) => {
      state.loggedInState = true;
      state.userName = action.payload;
    },
    logout: (state, action) => {
      state.loggedInState = false;
      
    },
  },
});
export const { toggleLoginForm, IslogIn,logout } = login.actions;

export default login.reducer;
