import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';
import renderField from './renderField';

const validate = (values) => {
  const errors = {};
  if(!values.Keyword) {
    errors.Keyword = 'Required!';
  }
  return errors;
};

const SearchForm = ({handleSubmit, pristine, reset, submitting}) => {
  return(  
    <form onSubmit = { handleSubmit }>
      <Field
            name="keyword"
            component={renderField}
            type="text"
            label="keyword"
            placeholder="robertkalson97"
          />
      <div>
        <Button className ='mr-2' color='success'  type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
        <Button type="button" color='primary' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'searchform',
  validate,
})(SearchForm);