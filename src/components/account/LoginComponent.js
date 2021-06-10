import React from 'react';
import AuthenticationService from '../../service/AuthenticationService';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

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
            this.props.dispatch(login(this.state.username));
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

export default connect()(LoginComponent);