import * as React from 'react';
import { ReactElement } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import SearchResultsPage from 'campusmap/src/search-results';
import NotFoundPage from 'campusmap/src/not-found'
import Header from './Header';
import Footer from './Footer';

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/search">
            <SearchResultsPage />
          </Route>
          <Route path="/*">
            <NotFoundPage />
          </Route> 
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
};

export default App;
