import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function OutRoute({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props =>
                sessionStorage.getItem('isLogin') !== 'true'|| localStorage.getItem('isLogin') !== 'true' ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
            
    );
}

export default OutRoute;