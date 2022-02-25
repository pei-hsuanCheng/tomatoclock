import React from 'react';
import Header from '../container/Header';
import Nav from '../container/Nav';
import Main from '../container/Main';
import '../assets/css/_common/layout.css';

const Index = () => {
  
  return (
    <div className="l-wrap relative z-[0] min-h-screen overflow-hidden bg-[#BC2B35] text-white">
      <div className='l-wrap-cnt'>
        <Header />
        <Nav />
        <Main />
      </div>
    </div>
  )
}

export default Index;