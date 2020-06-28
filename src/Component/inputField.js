import React from "react";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

export default function inputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      {label && <Label for="user">{label}</Label>}
      <Input
        {...field}
        id={name}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        invalid={showError}
        autocapitalize="none"
      />
       <ErrorMessage name={name} component={FormFeedback}/>
    </FormGroup>
  );
}
