import React, { Component } from "react";
import items from "./data";
const Roomcontext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 1000,
    breakfast: false,
    pets: false,
  };
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let minPrice = Math.min(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    let minSize = Math.min(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: minPrice,
      maxPrice,
      minPrice,
      minSize,
      maxSize
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
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];

    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    let tempRooms = rooms;
    capacity = parseInt(capacity);

    price = parseInt(price);
   
    // filer by capacity
    if (breakfast){
      tempRooms = tempRooms.filter((room)=> room.breakfast=== true)
    }
    if (pets){
      tempRooms = tempRooms.filter((room)=> room.pets=== true)
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    tempRooms = tempRooms.filter((room) => room.price >= price);
    tempRooms = tempRooms.filter((room)=> room.size >=minSize && room.size <= maxSize)
   
    
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };
  l;
  render() {
    return (
      <Roomcontext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </Roomcontext.Provider>
    );
  }
}
const RoomComsumer = Roomcontext.Consumer;
export { RoomProvider, RoomComsumer, Roomcontext };
