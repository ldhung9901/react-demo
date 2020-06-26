import React, { Component, useState } from "react";
import logo from "../images/logo.svg";
import { BsList } from "react-icons/bs";
import { GiPalmTree } from "react-icons/gi";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
export default function NavbarDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar transparent dark expand="md">
        <NavbarBrand>
          <Link to="/">
            <GiPalmTree></GiPalmTree>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="link" to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="link" to="/rooms">Rooms</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    // <nav className="navbar">
    //   <div className="nav-center">
    //     <div className="nav-header">
    //       <Link to="/">
    //         <GiPalmTree></GiPalmTree>
    //       </Link>

    //       <button
    //         type="button"
    //         className="nav-btn"
    //         onClick={this.handleToggle}
    //       >
    //         {" "}
    //         <BsList className="nav-icon" />
    //       </button>
    //     </div>
    //     <ul
    //       className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
    //     >
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/rooms">Rooms</Link>
    //       </li>

    //     </ul>
    //   </div>
    // </nav>
  );
}
