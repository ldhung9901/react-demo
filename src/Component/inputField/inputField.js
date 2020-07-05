import React from "react";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";
import { string } from "yup";

export default function inputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const uniqueID = name+ Math.round(Math.random()*1000).toString()
  return (
    <FormGroup>
      {label && <Label htmlFor={uniqueID}>{label}</Label>}
      <Input
        {...field}
          id={uniqueID}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        invalid={showError}
        autocapitalize="none"
        pattern="^(.{6,})"
      />
       <ErrorMessage name={name} component={FormFeedback}/>
    </FormGroup>
  );
}
