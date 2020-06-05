import Hero from "../Component/Hero";
import React, { Component } from "react";
import Banner from "../Component/Banner";
import { Link } from "react-router-dom";
export default class Rooms extends Component {
  render() {
    return (
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
          Return Home
          </Link>
        </Banner>
      </Hero>
    );
  }
}
