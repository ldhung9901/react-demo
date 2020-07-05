import React, { useState } from "react";
import { Button, Spinner, Progress } from "reactstrap";
import { FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

import { Formik, Form, FastField } from "formik";
import inputField from "../inputField/inputField";
import * as yup from "yup";

import { useHistory } from "react-router-dom";
import { toggleLoginForm, IslogIn } from "../../redux/Reducer/Login";
import { Checkout } from "../../redux/Reducer/Cart";
import { toggleSignUp } from "../../redux/Reducer/SignUp";

const axios = require("axios").default;
export default function Login() {
  const initialVaulues = { user: "", password: "" };
  const stateLogin = useSelector((state) => state.login);
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
          .post("https://leduchung.herokuapp.com/api/login", value, config)
          .then((res) => {
            // alert(`Login success`);

            sessionStorage.setItem("token", res.data.token);
            dispatch(IslogIn(res.data.user));

            axios.defaults.headers.common["Authorization"] = res.data.token;
            actions.setSubmitting(false);
            dispatch(toggleLoginForm());

            setPercent(0);
          })
          .catch((error) => {
            setPercent(0);
            if (error.response) {
              alert(error.response.data.error);
            }
            actions.setSubmitting(false);
          });
      }}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;

        return (
          <div>
            {isSubmitting && <Progress value={percent} />}
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
              onClick={() => dispatch(toggleLoginForm())}
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
              <div className="login-text">
              <p>
                Don't have an account ? <a onClick={()=>{dispatch(toggleSignUp()); dispatch(toggleLoginForm())}}>Sign Up!</a>{" "}
              </p>
            </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
