import React from 'react';

import './Button.css';

const ColorfulButton = (props) => {
  return <button className="bg-purple-gradient button-body-style" {...props} />
};

export default ColorfulButton;