import axios from 'axios';

class AccountDataService {
    fetchAllAccounts() {
        return axios.get(`http://localhost:8080/accounts/listaccounts`);
    }

    fetchAllTransactionsForAccount(id) {
        return axios.get(`http://localhost:8080/accounts/${id}/listtransactions`);
    }

    createAccount(account) {
        //console.log('executed service')
        return axios.post('http://localhost:8080/accounts/newAccount/', account);
    }
}

export default new AccountDataService();