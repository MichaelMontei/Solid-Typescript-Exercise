"use strict";
// @ts-ignore
class User {
    constructor() {
        this._password = 'user';
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
// @ts-ignore
class Admin {
    constructor() {
        this._password = "admin";
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        // @ts-ignore
        this._password = prompt('What is your new password?');
    }
}
class Bot {
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }
    setGoogleToken(token) {
        this._googleToken = token;
    }
}
