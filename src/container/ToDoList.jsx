import React from 'react';
import ToDoItem from '../component/ToDoItem';

const ToDoList = (props) => {
  const {list} = props;

  return (
    <div>
      <ul className='px-[28px] py-[50px] bg-[#BC2B35] rounded-b-[10px] rounded-l-[10px]'>
        {list.map((item) => <ToDoItem key={item.id} isDone={item.isDone} setIsDone={item.setIsDone} task={item.task} isNext={item.isNext} />)}
      </ul>
    </div>
  )
}

export default ToDoList;