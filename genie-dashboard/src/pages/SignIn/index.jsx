import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import './signin.scss';
import PropTypes from 'prop-types';

function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  //Handle Submit
  function handleSubmit(e) {
    e.preventDefault;
  }

  //Handle Form Changes
  function handleChanges(e) {
    setFormData();
    console.log(e);
  }
  console.log(props);
  console.log(formData);
  return (
    <div className="signin">
      <div className="signin--wrapper">
        <div className="form-signin">
          <form onSubmit={(e) => handleSubmit(e)}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => handleChanges(e)}
              />
              <label>Username</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label>Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
          </form>
        </div>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  props: PropTypes.any
};

export default SignIn;
