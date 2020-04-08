import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    const logged = localStorage.getItem('diario-online-logged');

    return (
        <Route
        {...rest}
        render={props =>
          logged ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
        }
      />
    );
};

export default PrivateRoute;