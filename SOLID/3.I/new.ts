interface Password {
    checkPassword(password: string) : boolean;
    resetPassword();
}

interface Facebook {
    setFacebookToken(token : string);
    getFacebookLogin(token : string) : boolean;
}

interface Google {
    setGoogleToken(token : string);
    checkGoogleLogin(token : string) : boolean;
}

class User implements Password, Facebook, Google {

    private _password : string = 'user';
    private _facebookToken : string;
    private _googleToken : string;

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }

    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
    }

    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }
}

class Admin implements Password {

    private _password : string = "admin";

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        // @ts-ignore
        this._password = prompt('What is your new password?');
    }
}

class Bot implements Google {

    private _googleToken : string;

    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }
}
