import React, { Component, useState } from "react";
import logo from "../images/logo.svg";
import { BsList, BsChevronDoubleRight } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { GiPalmTree } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Row,
  Col,
  Badge,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowCart, decrease, increase } from "../redux/Reducer/Cart";
import Cart from "./Cart";
import Login from "./Login";
import SignUp from "./SignUp";
import { toggleLogin } from "../redux/Reducer/Login";
import { toggleSignUp } from "../redux/Reducer/SignUp";
export default function NavbarDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);
  const stateCart = useSelector((state) => state.Cart);
  const stateLogin = useSelector((state) => state.login);
  const stateSignUp = useSelector((state) => state.signUp);

  const { items } = stateCart;
  return (
    <>
      <Navbar transparent dark expand="xl">
        <NavbarBrand>
          <Link to="/">
            <GiPalmTree></GiPalmTree>
          </Link>
        </NavbarBrand>
        <div className='nav-cart'>
          <FaShoppingCart
            onClick={(e) => {
              dispatch(toggleShowCart(e));
            }}
          />
          <Badge color="secondary">{items.length}</Badge>
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Row className=" w-100" navbar>
            <Col xs="12" sm="12" xl="1" className="text-center">
              <NavLink>
                <Link className="link hover-gold" to="/">
                  Home
                </Link>
              </NavLink>
            </Col>
            <Col xs="12" sm="12" md="12" xl="1" className="text-center">
              <NavLink>
                <Link className="link hover-gold" to="/rooms">
                  Rooms
                </Link>
              </NavLink>
            </Col>
            <Col
              xs="12"
              sm="12"
              xl="1"
              className="text-center text-xl-right  hover-gold "
            >
              <NavLink onClick={() => dispatch(toggleLogin())}>Login</NavLink>
            </Col>
            <Col
              xs="12"
              sm="12"
              xl="2"
              className="text-center text-xl-left hover-gold special "
            >
              <NavLink onClick={() => dispatch(toggleSignUp())}>
                Sign Up
              </NavLink>
            </Col>
            <Col
              xs="12"
              sm="12"
              xl="6"
              className="text-center text-xl-right m-auto hover-gold nav-cart-lg"
              style={{ cursor: "pointer" }}
            >
              <FaShoppingCart
                onClick={(e) => {
                  dispatch(toggleShowCart(e));
                }}
              />
              <Badge color="secondary">{items.length}</Badge>
            </Col>
          </Row>
        </Collapse>
      </Navbar>
      <Cart />
      <div className={stateLogin.showLogin ? "login" : "unShow"}>
        <Login />
      </div>
      <div className={stateSignUp.showSignUp ? "signUp" : "unShow"}>
        <SignUp />
      </div>
    </>
  );
}
