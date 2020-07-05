import React, { Component } from "react";

import Loading from "../Loading/Loading";
import Room from "../Room/Room";
import Title from "../Title/Title";
import { Row, Col, Container } from "reactstrap";
import { useSelector } from "react-redux";
export default function FeatureRooms() {
  const state = useSelector((state) => state.filter);
 

  if (state !== null) {
    let { loading, featuredRooms: rooms } = state;
    rooms = rooms.map((room) => {
      return (
        <Col s="12" md="4" style={{ marginBottom: "3rem" }}>
          <Room key={room.id} room={room} />
        </Col>
      );
    });
    return (
      <Container>
        <Title title="Featured Room" />
        <Row>{loading ? <Loading /> : rooms}</Row>
      </Container>
    );
  }
else return <div></div>
  
}
