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
  let peoples = getUnique(rooms, "capacity");
  peoples = peoples.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
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
        <div className="form-group">
          <label htmlFor="capacity">Capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {peoples}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price ${price}</label>
          <input
            name="price"
            id="price"
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            className="form-control"
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Size </label>
          <input
            name="minSize"
            id="minSize"
            type="number"
            min={minSize}
            max={maxSize}
            value={minSize}
            className="size-input"
            onChange={handleChange}
          ></input>
          <input
            name="maxSize"
            id="maxSize"
            type="number"
            min={minSize}
            max={maxSize}
            value={maxSize}
            className="size-input"
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              className="single-extra"
              onChange={handleChange}
            ></input>
            <label htmlFor="breakfast">breakfast</label>
          </div>

          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              className="single-extra"
              onChange={handleChange}
            ></input>
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
