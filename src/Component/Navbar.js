import React, { Component } from "react";
import logo from "../images/logo.svg";
import { BsList } from "react-icons/bs";
import {GiPalmTree} from "react-icons/gi"
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <GiPalmTree></GiPalmTree>
            </Link>

            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              {" "}
              <BsList className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
           
          </ul>
        </div>
      </nav>
    );
  }
}
