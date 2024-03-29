import React from 'react';
import { Link } from 'react-router-dom';
import { HouseFill } from 'react-bootstrap-icons';

import './FormHeader.css';
import { Col, Row } from 'react-bootstrap';
import routes from '../../../../router/routes';

const FormHeader = (props) => {
  return (
    <Row className="header mx-0 align-items-baseline">
      <Col>
        <h1 className="text-center text-md-left m-0">{props.heading}</h1>
      </Col>
      <Col className="login-link-wrapper" md={7}>
        <Link to={props.linkPath} className="login-link">{props.linkText}</Link>
      </Col>
      <Col className="d-flex justify-content-md-end justify-content-center">
        <Link to={routes.landing.path}>
          <HouseFill className="house-icon" size={30}/>
        </Link>
      </Col>
    </Row>
  )
}

export default FormHeader;