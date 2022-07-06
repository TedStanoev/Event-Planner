import React, { useState } from 'react';
import { List } from 'react-bootstrap-icons';

import './SideMenuCollapsible.css'

const SideMenuCollapsible = (props) => {
  return (
      <>
        <button
          className="c-toggle-btn"
          onClick={props.showMenu}
        >
          <List size={30}/>
        </button>
      </>
  )
}

export default SideMenuCollapsible;