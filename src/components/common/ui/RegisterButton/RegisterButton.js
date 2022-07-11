import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ArrowRightSquareFill } from 'react-bootstrap-icons';

import './RegisterButton.css'

const RegisterButton = (props) => {
    const [btnClasses, setBtnClasses] = useState(['submit-register'])

    useEffect(() => {
        if (props.disabled) {
            setBtnClasses([...btnClasses, 'disabled']);
        } else {
            setBtnClasses(['submit-register'])
        }
    }, [props.disabled])

    return (
        <Button 
            className={btnClasses.join(' ')} 
            as={ArrowRightSquareFill}
            type="submit"
            onClick={props.onClick}
        >

      </Button>
    )
}  

export default RegisterButton;