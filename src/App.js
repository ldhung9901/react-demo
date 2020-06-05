import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/rooms/:slug">
            <SingleRoom></SingleRoom>
          </Route>
          <Route exact path="/rooms">
            <Rooms></Rooms>
          </Route>
          <Route >
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
