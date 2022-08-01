export class User {
    constructor(password, facebookToken, googleToken) {
        this._password = 'user';
        this._facebookToken = "";
        this._googleToken = "";
        this._password = password;
        this._facebookToken = facebookToken;
        this._googleToken = googleToken;
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        // @ts-ignore
        this._password = prompt('What is your new password?');
    }
    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }
    setFacebookToken(token) {
        this._facebookToken = token;
    }
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }
    setGoogleToken(token) {
        this._googleToken = token;
    }
}
