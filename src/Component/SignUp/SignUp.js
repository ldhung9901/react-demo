import React, { useState } from "react";
import { FormGroup, Label, Input, Button, Spinner, Progress } from "reactstrap";
import { FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { toggleSignUp } from "../../redux/Reducer/SignUp";
import { Formik, Form, FastField } from "formik";
import inputField from "../inputField/inputField";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { toggleLoginForm } from "../../redux/Reducer/Login";
const axios = require("axios").default;
export default function SignUp() {
  const initialVaulues = { user: "", password: "" };
  const stateLogin = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const history = useHistory();
  const validationSchema = yup.object().shape({
    user: yup.string().required("This field is required."),
    password: yup.string().required("This field is required."),
  });
  const [percent, setPercent] = useState(0);
  let config = {
    onUploadProgress: (progressEvent) => {
      const totalLength = progressEvent.lengthComputable
        ? progressEvent.total
        : progressEvent.target.getResponseHeader("content-length") ||
          progressEvent.target.getResponseHeader(
            "x-decompressed-content-length"
          );
 
      if (totalLength !== null) {
        setPercent(Math.round((progressEvent.loaded * 100) / totalLength));
      }
    },
  };
  return (
    <Formik
      initialValues={initialVaulues}
      validationSchema={validationSchema}
      onSubmit={(value, actions) => {
        axios
          .post("https://leduchung.herokuapp.com/api/create", value,config)
          .then((res) => {
            alert(`User is created`);

           

           
            actions.setSubmitting(false);
            dispatch(toggleSignUp());
            setPercent(0);
          })
          .catch((error) => {
            setPercent(0);
            if(error){
              alert(error.response.data.error);
            }
            
            actions.setSubmitting(false);
          });
        console.log({ body: value });
      }}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;

        return (
          <div>
            {  isSubmitting && <Progress value={percent} />}
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
              <div className="signUp-text">
              <p>
                You have an account ? <a onClick={()=>{dispatch(toggleSignUp()); dispatch(toggleLoginForm())}}>Login!</a>{" "}
              </p>
            </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
