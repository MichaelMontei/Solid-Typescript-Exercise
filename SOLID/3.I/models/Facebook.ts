export interface Facebook {

    setFacebookToken(token : string): void;
    getFacebookLogin(token : string) : boolean;
}