import React from 'react';
import moment from 'moment';
import AccountDataService from '../../api/AccountDataService';

class ListTransactions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        };
    }

    componentDidMount() {
        const accountId = this.props.match.params.id;
        AccountDataService.fetchAllTransactionsForAccount(accountId)
            .then(response => {
                this.setState({ transactions: response.data });
            });
    }

    render() {
        return (
            <div>
                <div className="container">
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

export default ListTransactions;