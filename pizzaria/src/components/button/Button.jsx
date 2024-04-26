import React from 'react'
import './buttonstyle.css'


// eslint-disable-next-line react/prop-types
const Button = ({children, onClick, disabled}) => {
    return (
      <div>
      <button disabled={disabled} onClick={onClick} className="pushable">
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">
        {children}
      </span>
    </button>
      </div>
    );
  };

export default Button