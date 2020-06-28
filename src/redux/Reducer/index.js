import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from './Filter'
import Cart from './Cart'
import Login from "./Login";
import SignUp from "./SignUp";
import Message from './Message'
 
 
export const rootReducer = combineReducers  ({
  filter: filterReducer,
  Cart: Cart,
  login: Login,
  signUp : SignUp,
  message: Message
})