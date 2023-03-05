import React from 'react';
import { MapFill } from 'react-bootstrap-icons';

import './Logo.css';

const Logo = () => {
    return (
        <span className='c-logo-container'>
            <MapFill 
              size={25}
              className='c-logo'
            />
            <h2 className='c-logo-heading'>HangOut</h2>
        </span>
    )
}

export default Logo;