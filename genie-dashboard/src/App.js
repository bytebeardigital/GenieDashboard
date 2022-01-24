import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import SignIn from './pages/SignIn';
import OverviewBoar from './pages/OverviewBoard';
import Sidebar from './components/Sidebar';

const dataURL = 'http://localhost:3000/';

function App() {
  const [login, setLogin] = useState(true);
  const [data, setData] = useState(null);

  console.log(login);
  console.log(setLogin);

  function handleLogin() {
    alert('login');
  }

  //Get Data
  useEffect(() => {
    axios.get(dataURL).then((resp) => {
      setData(resp.data);
    });
  });

  //Check for Data
  console.log(data);

  return (
    <>
      <Sidebar />
      <div className="App">
        <div className="App--wrapper">
          <OverviewBoar />
        </div>
        {login && <SignIn login={login} handleLogin={handleLogin} />}
      </div>
    </>
  );
}

export default App;
