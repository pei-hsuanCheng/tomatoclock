import { React } from 'react';
import Index from './scene';
import ContextProvider from './context/contextProvider';

function App() {
  return (
    <ContextProvider>
      <Index />
    </ContextProvider>
  );
}

export default App;
