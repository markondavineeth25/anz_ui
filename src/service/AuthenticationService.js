class AuthenticationService {
    registerSuccesfulLogin(username) {
        sessionStorage.setItem('anzUsername', username);
    }

    logout() {
        sessionStorage.removeItem('anzUsername');
    }

    isUserLoggedin() {
        const username = sessionStorage.getItem('anzUsername');
        if ( username === null ) return false;
        return true;
    }

    getLoggedinUser() {
        const username = sessionStorage.getItem('anzUsername');
        if ( username === null ) return '';
        return username;
    }
}

export default new AuthenticationService();