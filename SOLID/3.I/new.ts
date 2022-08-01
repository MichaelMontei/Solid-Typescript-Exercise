interface Password {
    checkPassword(password: string) : boolean;

    // @ts-ignore
    resetPassword();
}

interface Facebook {
    // @ts-ignore
    setFacebookToken(token : string);
    getFacebookLogin(token : string) : boolean;
}

interface Google {
    // @ts-ignore
    setGoogleToken(token : string);
    checkGoogleLogin(token : string) : boolean;
}

// @ts-ignore
class User implements Password, Facebook, Google {

    private _password : string = 'user';
    private _facebookToken : string | undefined;
    private _googleToken : string | undefined;

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

// @ts-ignore
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

    private _googleToken : string | undefined;

    checkGoogleLogin(token: string | undefined) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }
}
