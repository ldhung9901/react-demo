import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { toggleSignUp } from "../redux/Reducer/SignUp";
import { Formik, Form, FastField } from "formik";
import inputField from "./inputField";
import * as yup from 'yup';
const axios = require('axios').default;
export default function SignUp() {
  const initialVaulues = { user: "", password: "" };
  const stateLogin = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
   
    user: yup.string().required("This field is required."),
    password:yup.string().required("This field is required.")
  })
  return (
    <Formik
      initialValues={initialVaulues}
      validationSchema={validationSchema}
      onSubmit={(value) => {
        axios.post('https://leduchung.herokuapp.com/api/create',value).then(res=>{
          alert(`User is created`)
        }).catch(e=>{
          alert(e)
        })
        console.log({body:value});
    }}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log(values, errors, touched);
        return (
          <div>
            <div
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: "gold",
                padding: "1rem auto",
              }}
            >
              Sign Up
            </div>
            <div
              className="signUp-closeBtn"
              onClick={() => dispatch(toggleSignUp())}
            >
              <FiX />
            </div>
            <Form className="form">
              <FastField
                name="user"
                component={inputField}
                label="New user name:"
                placeholder="New UserName"
                type="text"
              ></FastField>
              <FastField
                name="password"
                component={inputField}
                label="Password:"
                placeholder="New password"
                type="password"
              ></FastField>

              <Button type="submit">Create</Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
