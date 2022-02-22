import React from 'react';
import Header from '../container/Header';
import Nav from '../container/Nav';
import Main from '../container/Main';
import '../assets/css/_common/layout.css';

const Index = () => {
  
  return (
    <div className="min-h-screen bg-[#BC2B35]">
      <Header />
      <Nav />
      <Main />
    </div>
  )
}

export default Index;