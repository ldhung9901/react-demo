import React, { Component } from "react";
import Room from "./Room";

export default class RoomList extends Component {
  render() {
    let rooms = this.props.rooms;

    if (rooms.length === 0) {
      return (
        <div className="empty-search">
          <h3>unfotunately no rooms matched your search parameters</h3>
        </div>
      );
    }
    return <section className="roomslist">
        <div className="roomslist-center">
            {
                rooms.map(item =>{
                
                    return <Room key={item.id} room ={item}/>
                })
            }
        </div>
    </section>;
  }
}
