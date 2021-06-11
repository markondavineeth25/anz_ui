import React from 'react';
import AccountDataService from '../../api/AccountDataService';
import { connect } from 'react-redux';

class ListTransactions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            activeAccount: {}
        };
        this.getAccountInfo = this.getAccountInfo.bind(this);
    }

    componentDidMount() {
        const accountId = this.props.match.params.id;
        AccountDataService.fetchAllTransactionsForAccount(accountId)
            .then(response => {
                this.setState({ transactions: response.data });
            });
            this.getAccountInfo();
    }

    getAccountInfo() {
        const activeAccount = this.props.activeAccounts 
            // eslint-disable-next-line eqeqeq
            && this.props.activeAccounts.filter(account => account.id == this.props.match.params.id);
        activeAccount && this.setState({ activeAccount: activeAccount[0] });
    }

    render() {
        return (
            <div>
                <div className="container">
                <p>Account Name: <span className="text-primary">{this.state.activeAccount.accountName}</span></p>
                <p>Account Type: <span className="text-info">{this.state.activeAccount.accountType}</span></p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Transaction Amount</th>
                                <th>Transaction Date</th>
                                <th>Transaction Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.transactions.map(
                                    transaction =>
                                    <React.Fragment key={transaction.transactionId}>
                                    <tr>
                                        <td>{transaction.description}</td>
                                        <td>{transaction.transactionAmount}</td>
                                        <td>{transaction.transactionAmount}</td>
                                        <td>{transaction.transactionType}</td>
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

const mapStateToProps = (state) => {
    console.log('listTransactions: mapStateToProps:', state);
    return {
        test: 'test',
        activeAccounts: state.accounts.accounts
    }
};

export default connect(mapStateToProps)(ListTransactions);