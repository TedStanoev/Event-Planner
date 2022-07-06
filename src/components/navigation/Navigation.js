import React,  {useState } from 'react';
import { Link } from "react-router-dom";

import './Navigation.css'

import SideMenu from '../common/ui/sideMenu/SideMenu'
import AppBar from '../common/ui/horizontalBar/AppBar'

const Navigation = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <React.Fragment>
      <AppBar 
        openCloseSideMenu={() => setOpen(!open)}
      />
      <SideMenu
        open={open}
      >
        <Link className="nav-link" to="/home">HOME</Link>
        <Link className="nav-link" to="/info">ABOUT</Link>
        <Link className="nav-link" to="/info">CREATE EVENT</Link>
        <Link className="nav-link" to="/info">MY EVENTS</Link>
      </SideMenu>
    </React.Fragment>
  )
}

export default Navigation;