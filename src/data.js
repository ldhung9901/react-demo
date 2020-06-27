import React from "react";

import Client from "./Contentful";

import { useDispatch } from "react-redux";

import { getDataReducer1 } from "./redux/Reducer/Filter";

export default function Data() {
  const dispatch = useDispatch();
  let newState = {
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
  const getData = async () => {
    let res = await Client.getEntries({
      content_type: "myBeachResort",
      order: "fields.price",
    });
    let rooms = formatData(res.items);
    
    rooms = rooms.map(room=>{
      room.quantity =1
      return room
    })
   
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let minPrice = Math.min(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    let minSize = Math.min(...rooms.map((item) => item.size));
    const hung = {
      ...newState,
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: minPrice,
      maxPrice,
      minPrice,
      minSize,
      maxSize,
      
    };
   
    dispatch(getDataReducer1(hung));
   
  };

  getData();

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };
  return <div></div>;
}
