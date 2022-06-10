import {commonSelectors} from "../data/Selectors";
import {commonMethods} from "../common/CommonMethods";
const username = Cypress.env("username");
const password = Cypress.env("password");

export class LoginPage {

    insertCredentials() {
        commonMethods.clickOnVisibleElement(commonSelectors.signIn);
        commonMethods.typeUsername(commonSelectors.userName, username);
        commonMethods.typePassword(commonSelectors.password, password);
        commonMethods.clickOnVisibleElement(commonSelectors.submit);
    }
}

export const loginPage = new LoginPage();