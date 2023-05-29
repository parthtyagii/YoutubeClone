import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Main from './components/Main/Main';



function App() {

  const [showDrawer, setShowDrawer] = useState(true);

  return (
    <div className='App'>

      <Navbar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <Main showDrawer={showDrawer} setShowDrawer={setShowDrawer} />

    </div>
  );
};

export default App;
