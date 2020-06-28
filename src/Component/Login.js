import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { toggleLogin, loggedIn } from "../redux/Reducer/Login";
import { Formik, Form, FastField } from "formik";
import inputField from "./inputField";
import * as yup from 'yup';
import {AxiosError} from 'axios'
const axios = require('axios').default;
export default function Login() {
  const initialVaulues = { user: "", password: "" };
  const stateLogin = useSelector((state) => state.login);
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
        axios.post('https://leduchung.herokuapp.com/api/login',value).then(res=>{
          alert(`Login success`)
          dispatch(loggedIn());
          dispatch(toggleLogin())
          console.log(res)
        }).catch(error=>{
          
        alert(error.response.data.error)
        })
      
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
              Login
            </div>
            <div
              className="login-closeBtn"
              onClick={() => dispatch(toggleLogin())}
            >
              <FiX />
            </div>
            <Form className="form">
              <FastField
                name="user"
                component={inputField}
                label="User name:"
                placeholder="UserName"
                type="text"
              ></FastField>
              <FastField
                name="password"
                component={inputField}
                label="Password:"
                placeholder="password"
                type="password"
              ></FastField>

              <Button type="submit">Login</Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
