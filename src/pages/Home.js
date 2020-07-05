import React, { useState } from "react";
import Hero from "../Component/Hero/Hero";

import Service from "../Component/Service/Service"
import FeatureRooms from "../Component/FeatureRooms/FeatureRooms"
import CarouselCP from "../Component/Carolsel/Carolsel";



export default function Home() {

  return (
      <>
    
    <CarouselCP></CarouselCP>
    <Service></Service>
    <FeatureRooms></FeatureRooms>
  
    </>
  );
}
