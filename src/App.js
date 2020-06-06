import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./Component/Navbar";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  exact path="/rooms/:slug" component={SingleRoom} />

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
}
