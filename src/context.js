import React, { Component } from "react";
import items from "./data";
const Roomcontext = React.createContext();
class RoomProvider extends Component {
  state = {
    room: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };
  componentDidMount() {
    let rooms = this.formatData(items);
  
    let featuredRooms = rooms.filter(room => room.featured === true)
  
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms:rooms,
      loading: false
    });
  }
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  render() {
    return (
      <Roomcontext.Provider value={this.state}>
        {this.props.children}
      </Roomcontext.Provider>
    );
  }
}
const RoomComsumer = Roomcontext.Consumer;
export { RoomProvider, RoomComsumer, Roomcontext };
