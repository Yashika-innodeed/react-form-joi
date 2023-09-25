import React from 'react';
import './Input.css';

const Input = ({ type, placeholder, value, onChange, size, icon, disabled}) => {
const inputClassName = `input ${size}`;
const iconElement = icon ? <span className="icon">{icon}</span> : null;
  return (
    <div className='input-container' >
        {iconElement}
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={inputClassName}
      disabled = {disabled}
    />
    </div>
  );
}

export default Input;
