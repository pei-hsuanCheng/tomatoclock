import React from 'react';
import '../assets/css/_module/textfield.css';

const TextField = (props) => {
  const {value, variant='standard', className, placeholder, onChange, children} = props;

  return (
    <div className={`textfield inline-flex items-center ${className?className: ''} ${variant}`}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className='textfield-input flex-grow bg-[transparent]'
      />
      {children}
    </div>
  )
}

export default TextField;