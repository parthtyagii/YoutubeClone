import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Main from './components/Main/Main.jsx';
import BounceLoader from 'react-spinners/BounceLoader';



function App() {

  const [showDrawer, setShowDrawer] = useState(true);
  const [loader, setLoader] = useState(true);

  return (
    <>
      {loader && (
        <div className="pageLoader">
          <BounceLoader color='rgba(116, 204, 28, 255)' size='80px'/>
        </div>
      )}

      <div className='App'>
        <Navbar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        <Main setLoader={setLoader} showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      </div>
    </>
  );
};

export default App;
