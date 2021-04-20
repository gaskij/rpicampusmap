import * as React from 'react';
import { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from 'campusmap/src/auth';
import MapPage from 'campusmap/src/map';
import NotFoundPage from 'campusmap/src/not-found';
import LoginPage from 'campusmap/src/login';
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
    <AuthProvider>
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
          <Route path="/info/:id">
            <InfoPage />
          </Route>
          <Route path="/user">
            <LoginPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </AuthProvider>
  </BrowserRouter>
);

export default App;
