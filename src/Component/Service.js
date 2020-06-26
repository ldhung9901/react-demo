import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
import { Container, Row, Col } from "reactstrap";
export default class Service extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail style={{color: 'yellow'}} className="yellow" />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        icon: <FaHiking style={{color: 'yellow'}} className="yellow"/>,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        icon: <FaShuttleVan style={{color: 'yellow'}} className="yellow" />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        icon: <FaBeer style={{color: 'yellow'}} className="yellow"/>,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  };
  render() {
    return (
      <Container className="text-center">
        <Title title="Services"></Title>
        <Row>
          {this.state.services.map((item, index) => {
            return <Col s="12" sm="6" md="3" key={index}>
                <span >{item.icon}</span>
          <h6 style={{color: 'white'}} className="margin">{item.title}</h6>
          <p style={{color: 'white'}} >{item.info}</p>
            </Col>;
          })}
        </Row>
      </Container>
    );
  }
}
