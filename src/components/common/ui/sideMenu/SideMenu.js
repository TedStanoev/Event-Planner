import React from 'react';

import './SideMenu.css';

const SideMenu = (props) => {
  return (
    <React.Fragment>
      <ul style={{listStyleType:'none'}}>
        {props.children.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SideMenu;
