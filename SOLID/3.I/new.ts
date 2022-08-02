import { User } from "./models/User";
import { Admin } from "./models/Admin";
import { Bot } from "./models/Bot";

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');

// @ts-ignore
document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    debugger;

    let user;
    let auth = false;
    // @ts-ignore
    switch(true) {

        //Admin switch statement
        case (typePasswordElement.checked && loginAsAdminElement.checked):
            user = new Admin();
            auth = user.checkPassword(passwordElement.value);
            break;
        case (loginAsAdminElement.checked && !typePasswordElement.checked):
            alert('Admins can only sign in through Password');
            break;

        //User statements
        case (typePasswordElement.checked && !loginAsAdminElement.checked):
            // @ts-ignore
            user = new User();
            auth = user.checkPassword(passwordElement.value);
            break;
        case (typeFacebookElement.checked && !loginAsAdminElement.checked):
            // @ts-ignore
            user = new User();
            user.setFacebookToken('secret_token_fb');
            auth = user.getFacebookLogin('secret_token_fb');
            break;
        case (typeGoogleElement.checked && !loginAsAdminElement.checked):
            // @ts-ignore
            user = new User();
            user.setGoogleToken('secret_token_google');
            auth = user.checkGoogleLogin('secret_token_google');
            break;

        //Bot login statements
        case (!loginAsAdminElement.checked && typeGoogleElement.checked && passwordElement.value === "bot"):
            user = new Bot();
            user.setGoogleToken('secret_token_google');
            auth = user.checkGoogleLogin('secret_token_google');
            break;
    }

    if(auth) {
        alert('login success');
    } else {
        alert('login failed');
    }
});

resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();

    // @ts-ignore
    let user = loginAsAdminElement.checked ? new Admin() : new User();
    user.resetPassword();

});