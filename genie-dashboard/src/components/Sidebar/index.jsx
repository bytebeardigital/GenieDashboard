import React from 'react';
// import { AiFillHome } from 'react-icons/ai';
import logo from '../../assets/images/white-logo.png';
import logoLogout from '../../assets/images/black-logo.png';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          {SidebarLogo()}
          <p className="site-title">
            ByteBearDigi <span className="sub-text">Dashboard</span>
          </p>
        </Link>
        <hr />
      </div>
      <div className="sidebar--navigation">
        <ul className="nav flex-column text-center m-4">
          <Link to="/wishes" className="nav-link">
            Wishes
          </Link>
          <Link to="/" className="nav-link">
            Budgets
          </Link>
          <a onClick={handleSignOut} className="nav-link sidebar--nav">
            SignOut
          </a>
          {/* <Link to="/" className="nav-link">
            Budgets
          </Link>
          <Link to="/" className="nav-link">
            Goals
          </Link>
          <Link onClick={handleSignOut} className="nav-link sidebar--nav">
            SignOut
          </Link> */}
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
