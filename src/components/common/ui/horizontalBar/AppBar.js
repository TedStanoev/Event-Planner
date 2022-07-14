import React from 'react';
import { 
  Navbar, 
  Container,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { BoxArrowRight } from 'react-bootstrap-icons';

import './AppBar.css';

import SearchWithFilter from '../SearchWithFilter/SearchWithFilter';
import Logo from '../Logo/Logo';
import SideMenuCollapsible from '../SideMenuCollapsible/SideMenuCollapsible'; 

const AppBar = (props) => {
  const navigate = useNavigate();

  const onUserSignOut = async () => {
    await props.signOutUser();

    navigate('/', { replace: true });
  }

  return (
    <Navbar className="nav-bar">
      <Container fluid style={{ height: 'inherit' }}>
        <Navbar.Brand href="/home" className="c-navbar-brand">
          <Logo />
        </Navbar.Brand>
        <SideMenuCollapsible showMenu={props.openCloseSideMenu}/>
        <SearchWithFilter />
        {!props.user && <Link to="/register">Register</Link> }
        {!props.user && <Link to="/login">Log in</Link>}
        {
          props.user && <BoxArrowRight 
            size={20}
            onClick={onUserSignOut}
          />
        }
      </Container>
    </Navbar>
  )
}

export default AppBar;