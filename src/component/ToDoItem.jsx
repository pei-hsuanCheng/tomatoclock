import React from 'react';
import {ReactComponent as IconChecked} from '../assets/svg/icon_checked.svg';
import IconButton from './IconButton';

const ToDoItem = (props) => {
  const {isDone, setIsDone, task, isNext = 'false'} = props;
  return (
    <li className={`flex py-[4px] ${isNext ? 'opacity-50' : 'opacity-[1]'}`}>
      <IconButton size="medium" onClick={() => setIsDone(true)} className='flex-shrink mr-[20px]'>
        {isDone ?
          <IconChecked className='w-full h-full fill-[#F2F0C9]'/>
          :
          <span className='block w-full h-full border-[3px] border-solid border-[#F2F0C9] rounded-[50%]'></span>
        }
      </IconButton>
      <p className='flex-grow border-b border-dashed border-[#F2F0C9]'>{task}</p>
    </li>
  )
}

export default ToDoItem;