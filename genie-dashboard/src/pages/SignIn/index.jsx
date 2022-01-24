import React, { useState } from 'react';
import './signin.scss';
import PropTypes from 'prop-types';

function Login({ login, handleLogin }) {
  const [formData, setFormData] = useState({
    username: '' // required
  });

  if (!login) {
    return null;
  }

  function handleSubmission(e) {
    e.preventDefault();
    setFormData({ ...formData, username: e.target.value });

    let userInfo = login.user;

    userInfo.map((user) => {
      if (user.username === formData.username) {
        handleLogin(user);
      } else {
        alert('Uh Oh!');
      }
    });
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="signin">
      <div className="signin--content">
        <img src="./assets/images/rainbow-logo.png" alt="" className="login-logo mb-3" width={80} />
        <h1 className="login--title mb-4">Login Form</h1>
        <form className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            className="form-control mb-3"
            name="username"
            onChange={(e) => handleChange(e)}></input>
          <button
            onClick={handleSubmission}
            className="login-btn btn btn-primary btn-lg"
            type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.object,
  handleLogin: PropTypes.func
};

export default Login;
