import React, { useState } from 'react';
import '../assets/css/_module/nav.css';
import { ReactComponent as IconList } from '../assets/svg/icon_list.svg';
import { ReactComponent as IconSetting } from '../assets/svg/icon_setting.svg';
import IconButton from '../component/IconButton';
import NavCnt from './NavCnt';
import Task from './Task';
import Setting from './Setting';

const Nav = () => {
  const [navStatus, setNavStatus] = useState('index');

  return(
    <nav className={`absolute top-0 right-0 z-[1] flex h-full duration-300${navStatus === 'index' ? '' : ' active'}`}>
      <button
        type="button"
        className={`nav-cls-btn absolute z-[1] top-0 right-0 mt-[46px] mr-[68px] w-[50px] h-[40px]${navStatus === 'index' ? '': ' active'}`}
        disabled={navStatus==='index'}
        onClick={() => setNavStatus('index')}
      >
        <i className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-14px] w-[50px] h-[3px] bg-[#f2f0c9] transition-all duration-300'></i>
        <i className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[3px] bg-[#f2f0c9] transition-all duration-300'></i>
        <i className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[14px] ml-[10px] w-[30px] h-[3px] bg-[#f2f0c9] transition-all duration-300'></i>
      </button>
      <ul className='nav-btns flex flex-col justify-center -my-[16px] mr-[-40px] duration-300'>
        <li className='py-[16px]'>
          <IconButton size="xlarge" variant="outlined" onClick={() => setNavStatus('task')}>
            <IconList className="w-full h-full" />
          </IconButton>
        </li>
        <li className='py-[16px]'>
          <IconButton size="xlarge" variant="outlined" onClick={() => setNavStatus('setting')}>
            <IconSetting className="w-full h-full" />
          </IconButton>
        </li>
      </ul>
      <NavCnt>
        {navStatus !== 'index' ? navStatus === 'task' ? <Task /> : <Setting /> : ''}
      </NavCnt>
    </nav>
  )
};

export default Nav;