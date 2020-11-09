import * as React from 'react';
import { ReactElement } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

// TODO: fix typescript import issue
import logo from 'campusmap/public/images/logo.png';
import SearchForm from 'campusmap/src/shared/SearchForm';

const Header = (): ReactElement => (
  <header>
    <Navbar variant="dark" bg="danger" expand="lg">
      <Navbar.Brand href="/">
        <img id="logo" src={logo} height="40px" alt="RPI CampusMap" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search">Browse</Nav.Link>
          <Nav.Link href="/cas?returnTo=cas/user">Login</Nav.Link>
        </Nav>
        <SearchForm />
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
