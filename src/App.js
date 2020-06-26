import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./Component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/Reducer/Filter";

export default function App() {
  useEffect(() => {
    
  });
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/rooms/:slug" component={SingleRoom} />

        <Route exact path="/rooms">
          <Rooms></Rooms>
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </div>
  );
}
