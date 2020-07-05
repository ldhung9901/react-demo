import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Client from "./Contentful";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./Component/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";

import { Alert } from "reactstrap";
import { toggleMessage } from "./redux/Reducer/Message";

import { formatData } from "./Funtion/FormatData";
import { getDataReducer } from "./redux/Reducer/Filter";
import Axios from "axios";

export default function App() {

  let newState = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 1000,
    breakfast: false,
    pets: false,
  };
  const [data, setData] = useState(newState);
  useEffect(
    () =>{ getData();
     
      async function getData() {
        
        let res = await Client.getEntries({
          content_type: "myBeachResort",
          order: "fields.price",
        });
        let rooms = formatData(res.items);

        rooms = rooms.map((room) => {
          room.quantity = 1;
          return room;
        });

        let featuredRooms = rooms.filter((room) => room.featured === true);
        let maxPrice = Math.max(...rooms.map((item) => item.price));
        let minPrice = Math.min(...rooms.map((item) => item.price));
        let maxSize = Math.max(...rooms.map((item) => item.size));
        let minSize = Math.min(...rooms.map((item) => item.size));
        setData({
          ...newState,
          rooms,
          featuredRooms,
          sortedRooms: rooms,
          loading: false,
          price: minPrice,
          maxPrice,
          minPrice,
          minSize,
          maxSize,
        });
      }},
    []
  );

  const dispatch = useDispatch();
  const { loggedInState } = useSelector((state) => state.login);
  const visible = useSelector((state) => state.message.showMessage);
  const onDismiss = () => dispatch(toggleMessage());
  if (visible) {
    setTimeout(() => dispatch(toggleMessage()), 1000);
  }
  dispatch(getDataReducer(data));

  return (
    <div className="App">
      <Alert color="info" isOpen={visible} toggle={onDismiss}>
        Added to cart!
      </Alert>
      <Navbar></Navbar>
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
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </div>
  );
}
