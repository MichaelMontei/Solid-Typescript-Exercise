import {Password} from "./Password";

export class Admin implements Password {

    private _password : string = 'admin';

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        // @ts-ignore
        this._password = prompt('What is your new password?');
    }
}