import * as React from 'react';
import { ReactElement } from 'react';
import {
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const SearchForm = (): ReactElement => (
  <Form inline>
    <FormControl type="text" placeholder="Enter a location" className="mr-sm-2" />
    <Button variant="light">Search</Button>
  </Form>
);

export default SearchForm;
