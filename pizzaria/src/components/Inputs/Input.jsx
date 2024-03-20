import React from 'react';
import './input.css'

// eslint-disable-next-line react/prop-types
const Input = ({ type, placeholder, value, onChange, htmlFor, id }) => {
  return (
    <div className="group">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className="input"
        required
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label htmlFor={htmlFor}></label>
    </div>
  );
};

export default Input;
