import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';



function App() {

  return (
    <div className='App'>

      <Navbar />
      <SideDrawer />

    </div>
  );
};

export default App;
