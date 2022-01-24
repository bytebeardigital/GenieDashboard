import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import SignIn from './pages/SignIn';
import OverviewBoard from './pages/OverviewBoard';
import Sidebar from './components/Sidebar';
import WishesBoard from './pages/WishesBoard';
import { Routes, Route } from 'react-router-dom';

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
      {login ? (
        <SignIn login={data} handleLogin={handleLogin} />
      ) : (
        <>
          <Sidebar loginStatus={login} signOut={handleSignOut} />
          <div className="App">
            <div className="App--wrapper">
              <Routes>
                <Route path="/wishes" element={<WishesBoard />} />
                {/* <Route path="/budgets" element={<BudgetsBoard />} />
                <Route path="/goals" element={<GoalsBoard />} /> */}
                <Route path="/" element={<OverviewBoard data={data.dashboard} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
