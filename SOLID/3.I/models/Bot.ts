import { Google } from "./Google";

export class Bot implements Google {

    private _googleToken : string = "bot";

    checkGoogleLogin(token: string | undefined) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }
}