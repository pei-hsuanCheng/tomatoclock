import React from 'react';

const NavCnt = (props) => {
  const { className, children } = props;

  return (
    <div className={`nav-cnt overflow-hidden duration-300 ${className}`}>
      <div className='relative h-full flex justify-center items-center px-[68px] ml-[120px]'>
        {children}
      </div>
    </div>
  )
}

export default NavCnt;
