import { createSlice } from "@reduxjs/toolkit";
const itemLocal = JSON.parse(localStorage.getItem("items"));


const Cart = createSlice({
  name: "Cart",
  initialState: { items: itemLocal ? itemLocal : [], showCart: true },

  reducers: {
    addToCart: (state, action) => {
      let isDuplicate = false;
      state.items.forEach((item) => {
        if (item.name === action.payload.name) {
          isDuplicate = true;
          item.quantity += 1;
        }
      });
      if (isDuplicate === true) {
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("items", JSON.stringify(state.items));
      return state;
    },
    increase: (state, action) => {
      state.items.forEach((item) => {
        if (item.name === action.payload.name) {
          item.quantity += 1;
        }
      });
    },
    decrease: (state, action) => {
      let itemDelete = null;

      state.items.forEach((item,index) => {
        if (item.name === action.payload.name) {
          item.quantity -= 1;
          if (item.quantity === 0) {
            itemDelete = index;
          }
        }
      });
      if (itemDelete !== null) {
       state.items.splice(itemDelete,1)
   
   
      }
      return state;
    },
    getDataReducer2: (state, action) => {
      state = action.payload;
      return state;
    },
    toggleShowCart: (state, action) => {
      state.showCart = !state.showCart;
      return state;
    },
  },
});
export const {
  addToCart,
  getDataReducer2,
  toggleShowCart,
  increase,
  decrease,
} = Cart.actions;

export default Cart.reducer;
