import React from "react";
import { toggleShowCart, decrease, increase, Checkout } from "../../redux/Reducer/Cart";
import { Row, Col, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";
import { GoPlusSmall } from "react-icons/go";
import { GrFormSubtract } from "react-icons/gr";

export default function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Cart);
  const { items, showCart } = state;
  let price = 0;
  let token = null
  if(sessionStorage.getItem('token')){
     token = sessionStorage.getItem('token')
  }
  else( token=null)

  items.forEach((item) => {
    price += item.quantity * item.price;
  });

  return (
    <div>
      <div className={showCart ? "Cart" : "Cart unShow"}>
        <div style={{ margin: "0.1rem auto" }}>
          {" "}
          <div
            onClick={(e) => {
              dispatch(toggleShowCart(e));
            }}
            className="escape"
            style={{ marginTop: "1rem" }}
          >
            <FiX />
          </div>
        </div>

        <div style={{ overflowY: "scroll" }}>
          {items.length === 0 ? (
            <div style={{ marginTop: "3rem" }}>No room in your cart.</div>
          ) : (
            items.map((item, index) => {
              return (
                <Row key={index} style={{ margin: "2rem 0px" }}>
                  <Col xs="1" lg="1">
                    {index + 1}
                  </Col>
                  <Col xs="2" lg="2">
                    <img alt="no img"
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
                      <Col xs="1">
                        {" "}
                        <Button
                          outline
                          size="sm"
                          onClick={(e) => {
                            dispatch(decrease(item));
                          }}
                        >
                          <GrFormSubtract />
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
                          <GoPlusSmall />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              );
            })
          )}
        </div>
        <div>Total Price: {price} $</div>
        <a className="item" style={{ backgroundColor: "gold" }} onClick={()=> dispatch(Checkout(token))}>
          Check Out
        </a>
      </div>
    </div>
  );
}
