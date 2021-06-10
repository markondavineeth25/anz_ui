import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from '../footer/FooterComponent';
import HeaderComponent from '../header/HeaderComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import ErrorComponent from './ErrorComponent';
import ListAccounts from './ListAccounts';
import ListTransactions from './ListTransactions';
import NewAccount from './NewAccount';
import LoginComponent from './LoginComponent';

const AccountRouter = () => (
    <div>
        <Router>
            <HeaderComponent></HeaderComponent>
            <Switch>
                <Route path="/" exact component={LoginComponent} />
                <Route path="/login" component={LoginComponent} />
                <AuthenticatedRoute path="/listaccounts/:username" component={ListAccounts} />
                <AuthenticatedRoute path="/listTransactions/:id" component={ListTransactions} />
                <AuthenticatedRoute path="/newAccount" component={NewAccount} />
                <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent></FooterComponent>
        </Router>
    </div>
);



const LogoutComponent = () => (
    <>
        <h1>Logged out</h1>
        <div className="container">
            Thank you for using ANZ application !!
        </div>
    </>
);



export default AccountRouter;
