import * as React from 'react';
import { ReactElement } from 'react';


const SearchForm = (): ReactElement => (
  <form action="/search" method="get">
    <input type="text" placeholder="Enter a location" id="query" name="query" />
    <button type="submit">Search</button>
  </form>
);

export default SearchForm;

/*
    <Form inline>
      <FormControl type="text" placeholder="Enter a location" className="mr-sm-2" />
      <Button variant="light" type = "submit">Search</Button>
    </Form>
*/

