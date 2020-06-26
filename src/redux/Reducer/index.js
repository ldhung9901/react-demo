import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from './Filter'
import HandleChange from './HandleChange'

 
 
export const rootReducer = combineReducers  ({
  filter: filterReducer,
  handleChange: HandleChange
})