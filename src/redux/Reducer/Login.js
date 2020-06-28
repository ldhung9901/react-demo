const { createSlice } = require("@reduxjs/toolkit");
const { FaSadCry } = require("react-icons/fa");

const login = createSlice({
  name: "login",
  initialState: { showLogin: false, loggedIn: false },
  reducers: {
    toggleLogin: (state, action) => {
      state.showLogin = !state.showLogin;
    },
    loggedIn: (state, action) => {
      state.loggedIn = true;
    },
  },
});
export const { toggleLogin, loggedIn } = login.actions;

export default login.reducer;
