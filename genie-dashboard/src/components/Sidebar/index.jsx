import React from 'react';
// import { AiFillHome } from 'react-icons/ai';
import logo from '../../assets/images/white-logo.png';
//a to navigate to other site aths
import './sidebar.scss';

function Sidebar() {
  //Siebar Colors are a styled component

  return (
    <div className="sidebar">
      <div className="sidebar--heading row">
        <a>
          <img src={logo} alt="ByteBearDigi Logo" className="logo" />
          <p className="site-title">
            ByteBearDigi <span className="sub-text">Dashboard</span>
          </p>
        </a>
        <hr />
      </div>
      <div className="sidebar--navigation">
        <ul className="nav flex-column text-center m-4">
          <a to="/sign-in" className="nav-a sidebar--nav">
            SignOut
          </a>
          <a to="/wishes" className="nav-a">
            Wishes
          </a>
          <a to="/budgets" className="nav-a">
            Budgets
          </a>
          <a to="/goals" className="nav-a">
            Goals
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
