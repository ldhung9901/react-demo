import React, { Component } from "react";
import { useContext } from "react";
import { Roomcontext } from "../context";
import Title from "./Title";
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter({ rooms }) {
  const context = useContext(Roomcontext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  console.log(types);
  let capacitys = getUnique(rooms, "capacity");
  console.log(types);
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {}
      </form>
    </section>
  );
}
