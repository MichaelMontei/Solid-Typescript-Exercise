export interface Google {

    setGoogleToken(token : string): void;
    checkGoogleLogin(token : string) : boolean;
}