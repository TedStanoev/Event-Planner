import React from 'react';
import { 
  Navbar, 
  Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './AppBar.css';

import SearchWithFilter from '../SearchWithFilter/SearchWithFilter';
import Logo from '../Logo/Logo';
import SideMenuCollapsible from '../SideMenuCollapsible/SideMenuCollapsible'; 

const AppBar = (props) => {
  return (
    <Navbar className="nav-bar">
      <Container fluid style={{ height: 'inherit' }}>
        <Navbar.Brand href="/home" className="c-navbar-brand">
          <Logo />
        </Navbar.Brand>
        <SideMenuCollapsible showMenu={props.openCloseSideMenu}/>
        <SearchWithFilter />
        <Link to="/register">Register</Link>
        <Link to="/login">Log in</Link>
      </Container>
    </Navbar>
  )
}

export default AppBar;