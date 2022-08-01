export class Admin {
    constructor() {
        this._password = 'admin';
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        // @ts-ignore
        this._password = prompt('What is your new password?');
    }
}
