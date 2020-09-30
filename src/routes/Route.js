import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import AuthLayout from '../pages/__layouts/auth';
import DefaultLayout from '../pages/__layouts/default';

import { store } from '../store';

export default function RouteWrapper({
  isPrivate,
  component: Component,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propsType = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
