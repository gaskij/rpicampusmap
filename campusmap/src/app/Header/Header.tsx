import * as React from 'react';
import { ReactElement, useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

// TODO: fix typescript import issue
import logo from 'campusmap/public/images/logo.png';
import SearchForm from 'campusmap/src/shared/SearchForm';
import AuthContext from 'campusmap/src/auth';

const Header = (): ReactElement => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const user = useContext(AuthContext);
  // console.log('user.casUser:', user.casUser);
  // console.log('user.casUser === \'Not authenticated\':', user.casUser === 'Not authenticated');
  return (
    <header>
      <AuthContext.Consumer>
        {/* eslint-disable-next-line no-shadow */
          (user): ReactElement => (
            <Navbar variant="dark" bg="danger" expand="lg">
              <Navbar.Brand href="/">
                <img id="logo" src={logo} height="40px" alt="RPI CampusMap" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/search">Browse</Nav.Link>
                  {(!user || user.casUser === 'Not authenticated')
                    ? <Nav.Link href={`/api/cas?returnTo=${window.location.pathname}`}>Login</Nav.Link>
                    : <Nav.Link href={`/api/cas/logout?returnTo=${window.location.pathname}`}>Logout</Nav.Link>}
                  <Nav.Link href="/user">Profile</Nav.Link>
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
