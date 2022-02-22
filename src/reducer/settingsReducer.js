export const initSettingsState = {
  workingTime: 0,
  restingTime: 0,
 };

const settingsReducer = (state, action) => {
  const { payload } = action;
  const { workingTime, restingTime } = payload;

  switch (action.type) {
    case 'SET_WORKING_TIME':
      return { ...state, workingTime };
    case 'SET_RESTING_TIME':
      return { ...state, restingTime };
    default:
      return state;
  }
};
  
 export default settingsReducer;
 
