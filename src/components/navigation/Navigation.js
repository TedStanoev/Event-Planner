import React from 'react';
import { Link } from "react-router-dom";

import './Navigation.css'

import SideMenu from '../common/ui/sideMenu/SideMenu'
import AppBar from '../common/ui/horizontalBar/AppBar'

const Navigation = (props) => {
  return (
    <React.Fragment>
      <AppBar />
      <SideMenu
        variant="permanent"
        anchor="left"
        open={true}
      >
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/info">Create event</Link>
        <Link className="nav-link" to="/info">My events</Link>
        <Link className="nav-link" to="/info">Find events</Link>
        <Link className="nav-link" to="/info">Info</Link>
      </SideMenu>
    </React.Fragment>
  )
}

export default Navigation;