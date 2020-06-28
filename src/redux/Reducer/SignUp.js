const { createSlice } = require("@reduxjs/toolkit");


const signUp = createSlice({
    name: "signUp",
    initialState:{showSignUp:false},
    reducers: {
        toggleSignUp: (state, action) => {
            state.showSignUp = !state.showSignUp
        }
    }
})
export const {
    toggleSignUp
  } = signUp.actions;
  
  export default signUp.reducer;