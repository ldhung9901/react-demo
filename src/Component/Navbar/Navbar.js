import React, { Component, useState, useEffect } from "react";
import { GiPalmTree } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useHistory, NavLink as RRNavLink } from "react-router-dom";
import {RiUserSettingsLine} from "react-icons/ri"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Row,
  Col,
  Badge,
  Container,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowCart } from "../../redux/Reducer/Cart";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

import { toggleSignUp } from "../../redux/Reducer/SignUp";
import { toggleLoginForm, logout } from "../../redux/Reducer/Login";
import Axios from "axios";
export default function NavbarDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const { userName } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);
  const { loggedInState } = useSelector((state) => state.login);
  const stateCart = useSelector((state) => state.Cart);
  const stateLogin = useSelector((state) => state.login);
  const stateSignUp = useSelector((state) => state.signUp);
  const history = useHistory();
  const { items } = stateCart;
  const tokenLocalJson = sessionStorage.getItem("token");
  

  const [token, setToken] = useState(
    tokenLocalJson !== null ? tokenLocalJson.split(".")[1] : undefined
  );

  useEffect(() => {
    setToken(
      tokenLocalJson !== null ? tokenLocalJson.split(".")[1] : undefined
    );
    if (tokenLocalJson === null) {
      delete Axios.defaults.headers.common["Authorization"];
    } else {
      Axios.defaults.headers.common["Authorization"] = tokenLocalJson;
    }

    
  }, [sessionStorage.getItem("token")]);
  return (
    <>
     
        <Navbar transparent dark expand="xl" className="p-0">
          <NavbarBrand>
            <RRNavLink exact={true} to="/">
              <GiPalmTree></GiPalmTree>
            </RRNavLink>
          </NavbarBrand>
          <div className="nav-cart">
            <FaShoppingCart
              onClick={(e) => {
                dispatch(toggleShowCart(e));
              }}
            />
            <Badge color="secondary">{items.length}</Badge>
          </div>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <NavLink>
              <RRNavLink
                exact={true}
                className="link hover-gold"
                activeClassName="is-active"
                to="/"
              >
                Home
              </RRNavLink>
            </NavLink>

            <NavLink>
              <RRNavLink
                exact={true}
                className="link hover-gold"
                activeClassName="is-active"
                to="/rooms"
              >
                Rooms
              </RRNavLink>
            </NavLink>

            {token ? (
              <>
                <NavLink>Hi! {JSON.parse(atob(token)).user}</NavLink>
                <NavLink
                  onClick={() => {
                    sessionStorage.removeItem("token");
                    delete Axios.defaults.headers.common["Authorization"];
                    history.push("/");
                    dispatch(logout());
                    setToken(undefined);
                  }}
                  className="special-logout ml-auto"
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <> 
                <NavLink
                  className="hover-gold ml-auto"
                  onClick={() => dispatch(toggleLoginForm())}
                ><RiUserSettingsLine/></NavLink>
                <NavLink
                  className="hover-gold"
                  onClick={() => dispatch(toggleLoginForm())}
                >
                 
                  Login
                </NavLink>

                <NavLink
                  className="hover-gold special"
                  onClick={() => dispatch(toggleSignUp())}
                >
                  Sign Up
                </NavLink>
              </>
            )}
            <NavLink
              className="text-center text-xl-right hover-gold"
              style={{ cursor: "pointer" }}
            >
              {" "}
              <FaShoppingCart
                onClick={(e) => {
                  dispatch(toggleShowCart(e));
                }}
              />
              <Badge style={{ height: "fit-content" }} color="secondary">
                {items.length}
              </Badge>
            </NavLink>
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
