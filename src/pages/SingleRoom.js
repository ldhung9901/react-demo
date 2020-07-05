import React, { Component, useEffect } from "react";

import Banner from "../Component/Banner/Banner";
import { Link, useParams } from "react-router-dom";

import StyledHero from "../Component/Stylehero/Stylehero";
import { Row, Col, Container, Img, CardImg } from "reactstrap";
import { useSelector } from "react-redux";

export default function SingleRoom(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const state = useSelector((state) => state.filter);
  const {slug} =useParams()
  if (state !== null) {
    
    

    const getRoomF = (slug) => {
      let tempRooms = [...state.rooms];

      const room = tempRooms.find((room) => room.slug === slug);
      return room;
    };

    const room = getRoomF(slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <Container>
          <Row style={{ marginTop: "4rem" }}>
            {images.map((item, index) => {
              return (
                <Col xs="12" sm="6" md="3">
                  <CardImg key={index} src={item} alt={name} />
                </Col>
              );
            })}
          </Row>
        </Container>
        <Container>
          {" "}
          <Row>
            <Col md="8" xs="12">
              <h3>Details</h3>
              <p>{description}</p>
            </Col>
            <Col md="4" xs="12">
              <h3 >Infomation</h3>
              <h6 key='6'>Price : ${price}</h6>
              <h6 key='4'>Size : ${size}</h6>
              <h6 key='3'>
                Max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6 key='2'>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6 key='1'>{breakfast ? "free breakfast" : "included"}</h6>
            </Col>
          </Row>
        </Container>
        <Container>
          <Col>
            <h6>Extras</h6>
            <br />
            <p>
              {" "}
              <ul className="extras">
                {extras.map((item, index) => {
                  return <li key="index">- {item}</li>;
                })}
              </ul>
            </p>
          </Col>
        </Container>
      </>
    );
  } else return <div></div>;
}
