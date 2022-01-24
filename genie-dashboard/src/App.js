import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import SignIn from './pages/SignIn';
import OverviewBoard from './pages/OverviewBoard';
import Sidebar from './components/Sidebar';

const dataURL = 'https://my-json-server.typicode.com/bytebeardigital/geniedashboard/db';

function App() {
  const [login, setLogin] = useState(true);
  const [data, setData] = useState(null);

  function handleLogin() {
    setLogin(false);
  }
  function handleSignOut() {
    setLogin(!login);
  }

  //Get Data
  useEffect(() => {
    axios.get(dataURL).then((resp) => {
      setData(resp.data);
    });
  }, []);

  if (!data) return null;

  return (
    <>
      <Sidebar loginStatus={login} signOut={handleSignOut} />
      <div className="App">
        <div className="App--wrapper">
          <OverviewBoard data={data.dashboard} />
        </div>
        {login && <SignIn login={data} handleLogin={handleLogin} />}
      </div>
    </>
  );
}

export default App;
