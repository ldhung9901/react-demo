import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import './Component/Banner/Banner.scss'
import './Component/Carolsel/Carolsel.scss'
import './Component/Cart/Cart.scss'
import './Component/FeatureRooms/FeatureRoom.scss'
import './Component/Hero/Hero.scss'
import './Component/Loading/Loading.scss'
import './Component/Login/Login.scss'
import './Component/Navbar/Navbar.scss'
import './Component/Room/Room.scss'
import './Component/RoomContainer/RoomContainer.scss'
import './Component/RoomFilter/RoomFilter.scss'
import './Component/RoomList/RoomList.scss'
import './Component/Service/Service.scss'
import './Component/SignUp/SignUp.scss'
import './Component/Stylehero/Stylehero.scss'
import './Component/Title/Title.scss'
import './Component/inputField/inputField.scss'
import store from "./redux/Store";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      
     
        <Router>
          
          <App />
        </Router>

    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
