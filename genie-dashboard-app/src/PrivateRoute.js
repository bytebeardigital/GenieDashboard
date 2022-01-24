import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ component: Component, ...rest }) {
  return <Navigate {...rest} render={(props) => <Component {...props} />} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.any
};

export default PrivateRoute;
