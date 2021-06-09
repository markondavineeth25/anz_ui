import React from 'react';
import AuthenticationService from '../../service/AuthenticationService';
import { Route, Redirect } from 'react-router-dom';

class AuthenticatedRoute extends React.Component {

    render() {
        if (AuthenticationService.isUserLoggedin())
            return <Route {...this.props} />;
        else
            return <Redirect to="/login" />;

    }
}

export default AuthenticatedRoute;