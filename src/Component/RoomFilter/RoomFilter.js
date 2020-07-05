import React, { Component } from "react";

import Title from "../Title/Title";
import { Container, Row, Col, Form, Input, CustomInput, Label } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {handleChange} from '../../redux/Reducer/Filter'
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter() {
  const state = useSelector(state => state.filter)
  const dispatch = useDispatch()
 
  if(state !== null){

    const {
     rooms,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = state;
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
      <Container>
        <Title title="search rooms" />
        <Row
          style={{
            textAlign: "center",
            color: "white",
            textTransform: "capitalize",
          }}
        >
          <Col s="12" md="2">
            <label htmlFor="type">room type</label>
            <select
            style={{backgroundColor:"#2a2a2a",color:'white'}}
              name="type"
              id="type"
              value={type}
              className="form-control form-control-select"
              onChange={(event)=>{dispatch(handleChange({...event}))}}
            >
              {types}
            </select>
          </Col>
          <Col s="12" md="2" className="form-group">
            <label htmlFor="capacity">Capacity</label>
            <select
              style={{backgroundColor:"#2a2a2a",color:'white'}}
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={(event)=>{dispatch(handleChange({...event}))}}
            >
              {peoples}
            </select>
          </Col>
          <Col s="12" md="3" className="form-group">
            <label htmlFor="price">Price ${price}</label>
            <CustomInput
             style={{backgroundColor:"#2a2a2a",color:'white'}}
              name="price"
              id="price"
              type="range"
              min={minPrice}
              max={maxPrice}
              value={price}
              className="form-control"
              onChange={(event)=>{dispatch(handleChange({...event}))}}
              
            ></CustomInput>
          </Col>
          <Col s="12" md="3" className="form-group">
            <label>Size </label>
            <Row style={{justifyContent:"center"}}>
              <Input
                style={{ width: "auto", margin: "0rem 0.5rem",backgroundColor:"#2a2a2a",color:'white' }}
                name="minSize"
                id="minSize"
                type="number"
                min={minSize}
                max={maxSize}
                value={minSize}
                className="size-input"
                onChange={(event)=>{dispatch(handleChange({...event}))}}
              ></Input>
              <Input
                style={{ width: "auto" ,backgroundColor:"#2a2a2a",color:'white'}}
                name="maxSize"
                id="maxSize"
                type="number"
                min={minSize}
                max={maxSize}
                value={maxSize}
                className="size-input"
                onChange={(event)=>{dispatch(handleChange({...event}))}}
              ></Input>
            </Row>
          </Col>
          <Col s="12" md="2">
            <Row style={{paddingTop: '1rem',paddingLeft: '4rem'}} >
              {" "}
              <Col s="12" md="12" className="jus-start">
              <Input
                 style={{backgroundColor:"#2a2a2a",color:'white'}}
                  type="checkbox"
                  name="breakfast"
                  id="breakfast"
                  checked={breakfast}
                  className="single-extra"
                  onChange={(event)=>{dispatch(handleChange({...event}))}}
                ></Input>
                <label htmlFor="breakfast">breakfast</label>
              </Col>
              <Col s="12" md="12"className="jus-start">
                <Input
                 style={{backgroundColor:"#2a2a2a",color:'white'}}
                  type="checkbox"
                  name="pets"
                  id="pets"
                  checked={pets}
                  className="single-extra"
                  onChange={(event)=>{dispatch(handleChange({...event}))}}
                ></Input>
                <label htmlFor="pets">pets</label>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
  else return <div></div>
}
