import React, { useState } from 'react';
import './signin.scss';

function Login() {
  const [formData, setFormData] = useState({
    username: '', // required
    password: '' // required
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert('check users');
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="signin">
      <div className="signin--content">
        <img src="./assets/images/rainbow-logo.png" alt="" className="login-logo mb-3" width={80} />
        <h1 className="login--title mb-4">Login Form</h1>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            className="form-control mb-3"
            name="username"
            onChange={(e) => handleChange(e)}></input>
          <input
            type="text"
            placeholder="Password"
            className="form-control mb-3"
            value={formData.password}
            name="password"
            onChange={(e) => handleChange(e)}></input>
          <button className="login-btn btn btn-primary btn-lg" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
