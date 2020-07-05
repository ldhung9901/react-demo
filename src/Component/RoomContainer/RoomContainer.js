import React, { Component } from "react";
import RoomFilter from "../RoomFilter/RoomFilter";
import RoomList from "../RoomList/RoomList";

import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
function RoomContainer() {
  const state = useSelector((state) => state.filter);

  if (state === null) {
    return <div></div>;
  } else {
    const { loading, sortedRooms, rooms } = state;
    if (loading) {
      return <Loading />;
    }
    return (
      <>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
      </>
    );
  }
}
export default RoomContainer;

