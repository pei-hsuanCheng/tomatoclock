import React, { useState } from 'react';
import {ReactComponent as IconBell} from '../assets/svg/icon_bell.svg';
import {ReactComponent as IconAdd} from '../assets/svg/icon_add.svg';
import IconButton from '../component/IconButton';
import TextField from '../component/TextField';
import ToDoItem from '../component/ToDoItem';

const Main = () => {
  const [mission, setMission] = useState('');
  const [isDone, setIsDone] = useState(false);

  return(
    <div>
      <IconButton size="large" variant="outlined">
        <IconBell className='w-full h-full'/>
      </IconButton>
      <TextField placeholder='Add a new mission...' value={mission} onChange={(e) => setMission(e.value)}>
        <IconButton size="medium">
          <IconAdd className='w-full h-full fill-[#F2F0C9]'/>
        </IconButton>
      </TextField>
      <ToDoItem task='tmp' isDone={isDone} setIsDone={setIsDone} />
    </div>
  )
};

export default Main;