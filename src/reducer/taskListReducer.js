export const initTaskListState = {
  taskList: [],
  taskItem: {
    status: false,
    label: 'template task',
    processing: false,
  }
 };
  
 const taskListReducer = (state, action) => {
  const { payload } = action;
  const { taskList  } = payload;
  
  switch (action.type) {
    case 'SET_TASK_LIST':
      return { ...state, taskList };
    default:
      return state;
  }
 };
  
 export default taskListReducer;
 