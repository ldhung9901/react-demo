import { createSlice } from "@reduxjs/toolkit";

const filtedRoom = createSlice({
  name: "filter",
  initialState: null,

  reducers: {
    filted: (state, action) => {
     
    },
    getDataReducer1: (state, action) => {
      state = action.payload;
      return state;
    },
    getRoom: (state, action) => {},
    handleChange: (state, action) => {
      const event = action.payload;
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = event.target.name;
    
      state[name] = value;
      let {
        rooms,
        type,
        capacity,
        price,
        minSize,
        maxSize,
        breakfast,
        pets,
      } = state;

      let tempRooms = rooms;
      capacity = parseInt(capacity);

      price = parseInt(price);

      // filer by capacity
      if (breakfast) {
        tempRooms = tempRooms.filter((room) => room.breakfast === true);
      }
      if (pets) {
        tempRooms = tempRooms.filter((room) => room.pets === true);
      }
      if (capacity !== 1) {
        tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
      }
      tempRooms = tempRooms.filter((room) => room.price >= price);
      tempRooms = tempRooms.filter(
        (room) => room.size >= minSize && room.size <= maxSize
      );

      if (type !== "all") {
        tempRooms = tempRooms.filter((room) => room.type === type);
      }

      state.sortedRooms = tempRooms;

      return state;
    },
  },
});
export const { filted, getDataReducer1, handleChange } = filtedRoom.actions;

export default filtedRoom.reducer;
