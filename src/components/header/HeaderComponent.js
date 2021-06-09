import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthenticationService from '../../service/AuthenticationService';

const HeaderComponent = () => {
    const isUserLoggedIn = AuthenticationService.isUserLoggedin();
    const username = AuthenticationService.getLoggedinUser();
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-info">
                <div><a href="https://www.anz.com.au/personal/" className="navbar-brand">ANZ</a></div>
                <ul className="navbar-nav">
                    { isUserLoggedIn && <li><Link className="nav-link" to={`/listaccounts/${username}`}>Accounts</Link></li> }
                    { isUserLoggedIn && <li><Link className="nav-link" to={`/newAccount`}>New Account</Link></li> }
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    { !isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li> }
                    { isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li> }
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(HeaderComponent);