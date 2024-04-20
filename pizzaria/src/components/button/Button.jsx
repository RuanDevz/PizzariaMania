import React from 'react'
import './buttonstyle.css'


// eslint-disable-next-line react/prop-types
const Button = ({children, onClick}) => {
    return (
      <div>
      <button onClick={onClick} className="pushable">
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