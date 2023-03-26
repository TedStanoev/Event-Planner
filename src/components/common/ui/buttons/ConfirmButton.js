import React, { useEffect, useState } from 'react';
import { CheckSquareFill } from 'react-bootstrap-icons';

import "./ConfirmButton.css";

const ConfirmButton = (props) => {
  const [btnClasses, setBtnClasses] = useState(['confirm-submit']);

  useEffect(() => {
    if (props.disabled) {
      setBtnClasses([...btnClasses, 'disabled']);
    } else {
      setBtnClasses(['confirm-submit']);
    }
  }, [props.disabled]);

  return (
    <CheckSquareFill className={btnClasses} onClick={props.onClick} />
  )
};

export default ConfirmButton;