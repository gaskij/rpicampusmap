import * as React from 'react';
import { ReactElement } from 'react';
import {
  Formik, 
  Form,
  Field,
} from 'formik'


interface MyFormValues{
  submission: string;
}

const SearchForm = (): ReactElement => {
  const initialValues: MyFormValues = {submission: ' '};
  return(
      <Formik
        initialValues={initialValues}
        onSubmit={() =>{
        }}
        >
          <Form inline>
          <Field id ="submission" name = "submission" placeholder = "Enter a Location"/>
          <button type = "submit">Submit</button> 
          </Form>

      </Formik>
  );
};


export default SearchForm;

/*
    <Form inline>
      <FormControl type="text" placeholder="Enter a location" className="mr-sm-2" />
      <Button variant="light" type = "submit">Search</Button>
    </Form>
*/

