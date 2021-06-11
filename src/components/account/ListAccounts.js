import React from 'react';
import AccountDataService from '../../api/AccountDataService';
import { accountsAction } from '../../actions/accounts';
import { connect } from 'react-redux';

class ListAccounts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            networkError: false
        };
        this.listTransactions = this.listTransactions.bind(this);
        this.dispatchActiveAccounts = this.dispatchActiveAccounts.bind(this);
    }

    componentDidMount() {
        AccountDataService.fetchAllAccounts()
            .then(response => {
                this.setState({ accounts: response.data });
                this.setState({ networkError: false})
                this.dispatchActiveAccounts(response.data);
            })
            .catch(error => {
                this.setState({ networkError: true})
            }                
            );
    }

    dispatchActiveAccounts(allAccounts) {
        const activeAccounts = allAccounts.filter(account => account.status === 'Active');
        this.props.dispatch(accountsAction(activeAccounts));
    }

    listTransactions(id) {
        this.props.history.push(`/listTransactions/${id}`);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Welcome {this.props.match.params.username}</h1>
                    <h3>Displaying list of accounts</h3>

                    {this.state.networkError && <div className="alert alert-warning">Network error, Pl try again in some time.</div>}

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Account Name</th>
                                <th>Balance</th>
                                <th>Account Type</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.accounts.map(
                                    account =>
                                        <React.Fragment key={account.id}>
                                            <tr>
                                                <td>{account.accountName}</td>
                                                <td>{account.balance}</td>
                                                <td>{account.accountType}</td>
                                                <td>{account.status}</td>
                                                {account.status!=='Pending' && <td>
                                                    <button className="btn btn-success" onClick={() => this.listTransactions(account.id)}>
                                                        List Transactions
                                                    </button>
                                                </td>}
                                            </tr>
                                        </React.Fragment>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect()(ListAccounts);