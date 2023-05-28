import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Main from './components/Main/Main';



function App() {

  return (
    <div className='App'>

      <Navbar />
      <Main />

    </div>
  );
};

export default App;
