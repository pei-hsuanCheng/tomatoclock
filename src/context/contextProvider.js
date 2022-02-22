import React, { useReducer, createContext } from 'react';
import settingsReducer, { initSettingsState } from '../reducer/settingsReducer';
import taskListReducer, { initTaskListState } from '../reducer/taskListReducer';

export const ContextStore = createContext({
  settingsReducer: initSettingsState,
  taskListReducer: initTaskListState,
 })

const ContextProvider = (props) => {
  const [settingsState, dispatchSettings] = useReducer(settingsReducer, initSettingsState);
  const [taskListState, dispatchTaskList] = useReducer(taskListReducer, initTaskListState);
  return (
    <ContextStore.Provider
      value={{
        settingsState, dispatchSettings,
        taskListState, dispatchTaskList,
      }}
    >
      {props.children}
    </ContextStore.Provider>
  );
};

export default ContextProvider;