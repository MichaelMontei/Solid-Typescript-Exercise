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

});