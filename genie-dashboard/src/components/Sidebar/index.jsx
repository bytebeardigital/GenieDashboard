import React from 'react';
// import { AiFillHome } from 'react-icons/ai';
import logo from '../../assets/images/white-logo.png';
import logoLogout from '../../assets/images/black-logo.png';
import PropTypes from 'prop-types';
import './sidebar.scss';

//a to navigate to other site aths
import './sidebar.scss';

function Sidebar({ loginStatus, signOut }) {
  //Siebar Colors are a styled component

  function handleSignOut() {
    signOut();
  }

  function SidebarLogo() {
    if (!loginStatus) {
      return (
        <>
          <img src={logo} alt="ByteBearDigi Logo" className="logo" />
        </>
      );
    } else {
      return (
        <>
          <img src={logoLogout} alt="ByteBearDigi Logo" className="logo" />
        </>
      );
    }
  }
  return (
    <div className={`sidebar ${!loginStatus ? 'active' : 'disabled'}`}>
      <div className="sidebar--heading row">
        <a>
          {SidebarLogo()}
          <p className="site-title">
            ByteBearDigi <span className="sub-text">Dashboard</span>
          </p>
        </a>
        <hr />
      </div>
      <div className="sidebar--navigation">
        <ul className="nav flex-column text-center m-4">
          <a to="/wishes" className="nav-link">
            Wishes
          </a>
          <a to="/budgets" className="nav-link">
            Budgets
          </a>
          <a to="/goals" className="nav-link">
            Goals
          </a>
          <a onClick={handleSignOut} className="nav-link sidebar--nav">
            SignOut
          </a>
        </ul>
      </div>
    </div>
  );
}
Sidebar.propTypes = {
  loginStatus: PropTypes.bool,
  signOut: PropTypes.func
};

export default Sidebar;
