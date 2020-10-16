import * as React from 'react';
import { ReactElement } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = (): ReactElement => (
  <footer>
    <Navbar bg="danger">
      <Container className="justify-content-center" fluid>
        <Row>
          <Col className="text-center">
            <a href="https://rcos.io/projects/gaskij/rpicampusmap/profile" target="_blank" rel="noopener noreferrer">An RCOS Project</a>
            &nbsp;|&nbsp;
            <a href="https://github.com/gaskij/rpicampusmap" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              &nbsp;GitHub
            </a>
            &nbsp;|&nbsp;
            <Link to="/login">Admin Panel</Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </footer>
);

export default Footer;
