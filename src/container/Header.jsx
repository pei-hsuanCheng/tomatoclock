import React from 'react';
import '../assets/css/_module/header.css';
import {ReactComponent as Logo} from '../assets/svg/logo.svg';

const Header = () => {
  return(
    <header className='hd-title flex items-center h-[128px] px-[50px]'>
      <h1 className='absolute w-0 h-0 opacity-0'>Tomato todo list alarm system</h1>
      <Logo className='relative w-[140px] h-[40px] px-[20px]' />
      <h2 className='relative px-[20px] text-[16px]'>To-Do-List Alarm System</h2>
    </header>
  )
};

export default Header;