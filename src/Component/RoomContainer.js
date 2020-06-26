import React, { Component } from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

import Loading from "./Loading";
import { useSelector } from "react-redux";
function RoomContainer() {
  const state = useSelector((state) => state.filter);
  console.log(state);
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

// import React, { Component } from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import { RoomComsumer } from "../context";
// import Loading from "./Loading";
// export default class RoomContainer extends Component {
//   render() {
//     return (
//       <RoomComsumer>
//         {(value) => {
//           console.log(value);
//           const { loading, sortedRooms, rooms } = value;
//           if (loading) {
//             return <Loading />;
//           }
//           return (
//             <div>
//               <RoomFilter rooms={rooms} />
//               <RoomList rooms={sortedRooms} />
//             </div>
//           );
//         }}
//       </RoomComsumer>
//     );
//   }
// }
