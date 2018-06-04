import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <FormGroup>
    <Label>{label}</Label>
      <Input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
  </FormGroup>
)

export default renderField;