
import React from "react";
import Hero from "../Component/Hero/Hero";
import Banner from "../Component/Banner/Banner";
import { Link } from "react-router-dom";
import WithRoomConsumer from "../Component/RoomContainer/RoomContainer";
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
