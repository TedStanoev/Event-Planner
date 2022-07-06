import React from 'react';
import { Link } from 'react-router-dom';
import { HouseFill } from 'react-bootstrap-icons';

import './FormHeader.css';

const FormHeader = (props) => {
    return (
        <div className="header">
            <h1>{props.heading}</h1>
            <div className="login-link-wrapper">
                <Link to={props.linkPath} className="login-link">{props.linkText}</Link>
            </div>
            <Link to="/home" className="home-link">
                <HouseFill size={30}/>
            </Link>
      </div>
    )
}

export default FormHeader;