import * as React from 'react';
import { ReactElement, useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// TODO: fix typescript import issue
import logo from 'campusmap/public/images/logo.png';
import SearchForm from 'campusmap/src/shared/SearchForm';
import AuthContext from 'campusmap/src/auth';

const Header = (): ReactElement => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const user = useContext(AuthContext);

  return (
    <header>
      <AuthContext.Consumer>
        {/* eslint-disable-next-line no-shadow */
          (user): ReactElement => (
            <Navbar variant="dark" bg="danger" expand="lg">
              <Link className="navbar-brand" to="/">
                <img id="logo" src={logo} height="40px" alt="RPI CampusMap" />
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/search">Browse</Link>
                  {(!user || user.casUser === 'Not authenticated')
                    ? <Nav.Link href={`/api/cas?returnTo=${window.location.pathname}`}>Login</Nav.Link>
                    : (
                      <>
                        <Link className="nav-link" to="/user">Profile</Link>
                        <Nav.Link href="/api/cas/logout">Logout</Nav.Link>
                      </>
                    )}
                </Nav>
                <SearchForm />
              </Navbar.Collapse>
            </Navbar>
          )
        }
      </AuthContext.Consumer>
    </header>
  );
};

export default Header;
