import * as React from 'react';
import { ReactElement } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import AuthContext from 'campusmap/src/auth';

// TODO: fix typescript import issue
import logo from 'campusmap/public/images/logo.png';
import SearchForm from 'campusmap/src/shared/SearchForm';

const Header = (): ReactElement => (
  <header>
      <AuthContext.Consumer> 
        {(user) => (
          <Navbar variant="dark" bg="danger" expand="lg">
            <Navbar.Brand href="/">
              <img id="logo" src={logo} height="40px" alt="RPI CampusMap" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/search">Browse</Nav.Link>
                {(!user || JSON.stringify(user.casUser) === 'Not authenticated')
                  ? <Nav.Link href={`/api/cas/logout?returnTo=${window.location.pathname}`}>Logout</Nav.Link>
                  : <Nav.Link href={`/api/cas?returnTo=${window.location.pathname}`}>Login</Nav.Link>
                }
                <Nav.Link href="/user">Profile</Nav.Link>
              </Nav>
              <SearchForm />
            </Navbar.Collapse>
          </Navbar>
      )}
      </AuthContext.Consumer>
  </header>
);

export default Header;
