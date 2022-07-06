import React from 'react';
import {
  ListGroup,
  Collapse,
} from 'react-bootstrap';

import './SideMenu.css';

const SideMenu = (props) => {
  return (
    <Collapse in={props.open} dimension="width">
      <div style={{ display: props.open ? 'block' : 'none' }}>
        <ListGroup variant="flush" className="c-list-group-container">
          {props.children.map((c, index) => (
            <ListGroup.Item key={index} className="c-list-item">{c}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Collapse>
  );
};

export default SideMenu;
