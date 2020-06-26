import { createSlice } from "@reduxjs/toolkit";

const HandleChange = createSlice({
  name: "filter",
  initialState: null,

  reducers: {
    handleChange: (state, action) => {
      const event = action.payload;
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = event.target.name;
      console.log( state[`${name}`],value)
      state[name] = value;
      return state
    },
    getDataReducer2: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { handleChange, getDataReducer2 } = HandleChange.actions;

export default HandleChange.reducer;
