import React from 'react';
import ToDoItem from '../component/ToDoItem';

const ToDoList = (props) => {
  const {list} = props;

  return (
    <>{list.map((item) => {
      return
    })}
    </>
  )
}

export default ToDoList;