import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import './Navigation.css'

import SideMenu from '../common/ui/sideMenu/SideMenu'
import AppBar from '../common/ui/horizontalBar/AppBar'

import { signoutUser } from '../../api/auth';

const Navigation = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <React.Fragment>
      <AppBar 
        openCloseSideMenu={() => setOpen(!open)}
        user={props.user}
        signOutUser={async () => props.dispatch(signoutUser())}
      />
      <SideMenu
        open={open}
      >
        <Link className="nav-link" to="/home">HOME</Link>
        <Link className="nav-link" to="/info">ABOUT</Link>
        <Link className="nav-link" to="/create-event">CREATE EVENT</Link>
        <Link className="nav-link" to="/info">MY EVENTS</Link>
      </SideMenu>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Navigation);