import * as React from 'react';
import { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MapPage from 'campusmap/src/map';
import SearchResultsPage from 'campusmap/src/search-results';
import InfoPage from 'campusmap/src/info';

import Header from './Header';
import Footer from './Footer';

/**
 * Top level React App containing routes to all pages on the site.
 * This component is rendered at the root element on the index page.
 */
const App = (): ReactElement => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path="/">
          <MapPage targetId="mapContainer" />
        </Route>
        <Route path="/index">
          <MapPage targetId="mapContainer" />
        </Route>
        <Route path="/search">
          <SearchResultsPage />
        </Route>
      </Switch>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
