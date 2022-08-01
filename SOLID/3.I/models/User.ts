import { Password } from "./Password";
import { Facebook } from "./Facebook";
import { Google } from "./Google";


export class User implements Password, Facebook, Google {

    private _password : string = 'user';
    private _facebookToken : string | undefined = "";
    private _googleToken : string | undefined = "";


    constructor(password: string, facebookToken: string | undefined, googleToken: string | undefined) {
        this._password = password;
        this._facebookToken = facebookToken;
        this._googleToken = googleToken;
    }

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        // @ts-ignore
        this._password = prompt('What is your new password?');
    }

    getFacebookLogin(token: string | undefined) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
    }

    checkGoogleLogin(token: string | undefined) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }
}