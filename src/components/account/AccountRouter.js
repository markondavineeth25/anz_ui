import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticationService from '../../service/AuthenticationService';
import FooterComponent from '../footer/FooterComponent';
import HeaderComponent from '../header/HeaderComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import ErrorComponent from './ErrorComponent';
import ListAccounts from './ListAccounts';
import ListTransactions from './ListTransactions';
import NewAccount from './NewAccount';


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

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'anzuser',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    loginClicked() {
        console.log('login clicked:', this.state);
        if (this.state.username === "anzuser" && this.state.password === "password") {
            AuthenticationService.registerSuccesfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/listaccounts/${this.state.username}`);
            this.setState({
                showSuccessMessage: true,
                hasLoginFailed: false,
            });
        } else {
            this.setState({
                showSuccessMessage: false,
                hasLoginFailed: true,
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Login to ANZ Bank</h1>
                <div className="container">
                    {this.state.showSuccessMessage && <div>Login Succesful</div>}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Login Failed</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }
}

const LogoutComponent = () => (
    <>
        <h1>Logged out</h1>
        <div className="container">
            Thank you for using ANZ application !!
        </div>
    </>
);



export default AccountRouter;
