import React, { Component } from "react";
import { Roomcontext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
export default class FeatureRooms extends Component {
  static contextType = Roomcontext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    console.log(rooms);
    return (
      <section className="featured-rooms">
        <Title title="Featured Room"/>
          <div className="featured-rooms-center">
            {loading? <Loading />:rooms}
          </div>
       
       
      </section>
    );
  }
}
