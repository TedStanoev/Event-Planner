import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavigationLink.css';

const NavigationLink = (props) => (
  <Nav.Link as={Link} to={props.to} className="navigation-link">{props.label}</Nav.Link>
);

export default NavigationLink;