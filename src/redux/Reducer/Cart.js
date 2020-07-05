import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
const itemLocal = JSON.parse(localStorage.getItem("items"));


const Cart = createSlice({
  name: "Cart",
  initialState: { items: itemLocal ? itemLocal : [], showCart: false },

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
      localStorage.setItem("items", JSON.stringify(state.items));
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
      localStorage.setItem("items", JSON.stringify(state.items));
      return state;
    },
    getDataReducer2: (state, action) => {
      state = action.payload;
      localStorage.setItem("items", JSON.stringify(state.items));
      return state;
    },
    toggleShowCart: (state, action) => {
      state.showCart = !state.showCart;
      localStorage.setItem("items", JSON.stringify(state.items));
      return state;
    },
    Checkout: (state,action)=>{
    
    Axios.post('https://leduchung.herokuapp.com/api/cart',{}).then((res)=>
      alert("Your cart is saved.")
    ).catch((error)=>{alert("You must login fisrt.")}
    )
    }
  },
});
export const {
  addToCart,
  getDataReducer2,
  toggleShowCart,
  increase,
  decrease,Checkout
} = Cart.actions;

export default Cart.reducer;
