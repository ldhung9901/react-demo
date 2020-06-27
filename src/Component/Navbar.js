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
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Row,
  Col,
  Container,
  Badge,
  Button,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowCart, decrease, increase } from "../redux/Reducer/Cart";
export default function NavbarDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);
  const state = useSelector((state) => state.Cart);
 
  const { items, showCart } = state;
  return (
    <>
      <Navbar transparent dark expand="md">
        <NavbarBrand>
          <Link to="/">
            <GiPalmTree></GiPalmTree>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Row className=" w-100" navbar>
            <Col xs="12" sm="12" md="1" className="text-center">
              <NavLink>
                <Link className="link hover-gold" to="/">
                  Home
                </Link>
              </NavLink>
            </Col>
            <Col xs="12" sm="12" md="1" className="text-center">
              <NavLink>
                <Link className="link hover-gold" to="/rooms">
                  Rooms
                </Link>
              </NavLink>
            </Col>
            <Col
              xs="12"
              sm="12"
              md="10"
              className="text-center text-md-right m-auto hover-gold "
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

      <div className={showCart ? "Cart " : "Cart unShow"}>
        <div style={{ margin: "0.1rem auto" }}>
          {" "}
          <div
            onClick={(e) => {
              dispatch(toggleShowCart(e));
            }}
            className="escape"
          >
            <FiX />
          </div>
        </div>

        <div style={{overflowY:'scroll'}}>
          {items.map((item, index) => {
            return (
              <Row key={index} style={{ margin: "2rem 0px" }}>
                <Col xs="1" lg="1">
                  {index + 1}
                </Col>
                <Col xs="2" lg="2">
                  <img
                    src={item.images[0]}
                    style={{ height: "20px", width: "50px" }}
                  />
                </Col>
                <Col
                  xs="4"
                  lg="4"
                  className="text-lg-left"
                  style={{ textTransform: "capitalize" }}
                >
                  {item.name}
                </Col>
                <Col xs="4" lg="4" className="text-lg-left">
                  <Row>
                    <Col> Qty: {item.quantity} </Col>
                    <Col  xs="1">
                      {" "}
                      <Button
                        outline
                        size="sm"
                        onClick={(e) => {
                          dispatch(decrease(item));
                        }}
                      >
                        -
                      </Button>{" "}
                    </Col>
                    <Col xs="1">
                      <Button
                        outline
                        size="sm"
                        onClick={(e) => {
                          dispatch(increase(item));
                        }}
                      >
                        +
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            );
          })}
        </div>

        <a className="item" style={{ backgroundColor: "gold" }}>
          Check Out
        </a>
      </div>
    </>
  );
}
