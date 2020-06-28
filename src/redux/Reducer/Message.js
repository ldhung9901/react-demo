const { createSlice } = require("@reduxjs/toolkit");


const message = createSlice({
    name: "showMessage",
    initialState:{showMessage:false},
    reducers: {
        toggleMessage: (state, action) => {
            if(action.payload){
                state.showMessage= true
            }
            else {
                state.showMessage =false
            }
           return state
        }
    }
})
export const {
    toggleMessage
  } = message.actions;
  
  export default message.reducer;