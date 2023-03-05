import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import routes from '../router/routes';
import Logo from '../common/ui/Logo/Logo';

import { signoutUser } from '../../api/auth';

import './Navigation.css';
import NavigationLink from './nav-links/NavigationLink';

const Navigation = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <Navbar expand="md" className="mb-3 bg-purple-gradient navigation">
      <Container fluid>
        <Navbar.Brand as={Link} to={routes.home.path} className="c-navbar-brand">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavigationLink to={routes.login.path} label="Login" />
              <NavigationLink to={routes.register.path} label="Register" />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Navigation);
