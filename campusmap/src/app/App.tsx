import * as React from 'react';
import { ReactElement } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import SearchResultsPage from 'campusmap/src/search-results';
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
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
};

export default App;
