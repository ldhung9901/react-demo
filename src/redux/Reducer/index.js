import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from './Filter'
import Cart from './Cart'

 
 
export const rootReducer = combineReducers  ({
  filter: filterReducer,
  Cart: Cart
})