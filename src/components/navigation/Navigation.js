import React from 'react';
import { useDispatch } from 'react-redux';
import { generatePath, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

import routes from '../router/routes';
import Logo from '../common/ui/Logo/Logo';
import NavigationLink from './nav-links/NavigationLink';

import { signoutUser } from '../../api/auth';
import { auth } from '../../config/app';

import './Navigation.css';
import ProfileLink from './profile-link/ProfileLink';

const Navigation = (props) => {
  const [user] = useAuthState(auth);

  const dispatch = useDispatch();

  return (
    <Navbar expand="md" className="mb-3 bg-purple-gradient navigation">
      <Container fluid>
        <Navbar.Brand as={Link} to={routes.landing.path} className="c-navbar-brand">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Body>
            {!user && (
              <Nav className="justify-content-end flex-grow-1">
                <NavigationLink to={routes.login.path} label="Login" />
                <NavigationLink to={routes.register.path} label="Register" />
              </Nav>
            )}
            {user && (
              <Nav className="justify-content-start flex-grow-1">
                <NavigationLink to={routes.home.path} label="Home" />
                <NavigationLink to={routes.createHangout.path} label="Create Hangout" />
                <ProfileLink to={generatePath(routes.editProfile.path, { userUID: user.uid })} user={user.providerData[0]} />
                <NavigationLink to={routes.landing.path} onClick={() => dispatch(signoutUser())} label="Logout" />
              </Nav>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
