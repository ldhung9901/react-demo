import React from "react";
import Hero from "../Component/Hero";
import Banner from "../Component/Banner";
import { Link } from "react-router-dom";
import Service from "../Component/Service"
import FeatureRooms from "../Component/FeatureRooms"


export default function Home() {
  return (
      <>
    <Hero hero="defaultHero">
      <Banner
        title="luxurious rooms"
        subtitle="deluxe Rooms starting at $299"
      ><Link to="/rooms" className="btn-primary">our rooms</Link></Banner>
    </Hero>
    <Service></Service>
    <FeatureRooms></FeatureRooms>
  
    </>
  );
}
