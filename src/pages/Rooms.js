import Hero from "../Component/Hero";
import React, { Component, useEffect } from "react";
import Banner from "../Component/Banner";
import { Link } from "react-router-dom";
import WithRoomConsumer from "../Component/RoomContainer";
export default function Rooms() {

  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <WithRoomConsumer />
    </>
  );
}
