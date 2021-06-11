const accountsReduer = (state = {}, action) => {
    switch (action.type) {
      case 'ACCOUNTS_LIST':
        return {
          accounts: action.accounts
        };
      default:
        return state;
    }
  };

export default accountsReduer;