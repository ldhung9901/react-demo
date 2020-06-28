import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./Component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/Reducer/Filter";
import { Alert } from "reactstrap";
import { toggleMessage } from "./redux/Reducer/Message";

export default function App() {
  useEffect(() => {});
  const dispatch = useDispatch();
const {loggedIn} = useSelector(state=> state.login)
  const visible =  useSelector(state=> state.message.showMessage)
  const onDismiss = () => dispatch(toggleMessage());
  if(visible){
    setTimeout(()=>dispatch(toggleMessage()),1000)
  }
  
  return (
    <div className="App">
      <Alert color="info" isOpen={visible} toggle={onDismiss} >
        Added to cart!
      </Alert>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
     
          <Home></Home>
        </Route>
        <Route exact path="/rooms/:slug" >
          <SingleRoom></SingleRoom>
          {loggedIn ? <Redirect exact to="/" />:null}
        </Route>

        <Route exact path="/rooms">
          <Rooms></Rooms>
          {loggedIn ? <Redirect exact to="/" />:null}
        </Route>
        <Route>
          <Error></Error>
          {loggedIn ? <Redirect exact to="/" />:null}
        </Route>
      </Switch>
    </div>
  );
}
