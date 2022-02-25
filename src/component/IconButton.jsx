import React from 'react';
import '../assets/css/_module/btn.css';

const sizes = {
  'xlarge': 'w-[84px] h-[84px] p-[25px]',
  'large': 'w-[70px] h-[70px] p-[24px]',
  'medium': 'w-[32px] h-[32px] p-[4px]',
  'small': 'w-[20px] h-[20px] p-[4px]',
};

const IconButton = (props) => {
  const {children, size = 'small', variant = 'standard', className, onClick} = props;

  return (
    <button
      type="button"
      className={`btn-icon ${className?className:''} rounded-[50%] ${sizes[size] ? sizes[size] : `w-[${size}px] p-[10px]`} ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default IconButton;