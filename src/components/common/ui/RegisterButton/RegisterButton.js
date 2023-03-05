import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ArrowRightSquareFill } from 'react-bootstrap-icons';

import './RegisterButton.css';

const RegisterButton = (props) => {
  const [btnClasses, setBtnClasses] = useState(['submit-register']);

  useEffect(() => {
    if (props.disabled) {
      setBtnClasses([...btnClasses, 'disabled']);
    } else {
      setBtnClasses(['submit-register']);
    }
  }, [props.disabled]);

  return (
    <ArrowRightSquareFill
      aria-disabled={props.disabled}
      className={btnClasses.join(' ')}
      onClick={props.disabled ? undefined : props.onClick}
    />
  );
};

export default RegisterButton;
