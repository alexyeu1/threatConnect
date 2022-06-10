import {commonMethods} from "../common/CommonMethods";
const baseUrl = Cypress.env("baseUrl");

export class VisitPage {

    navigateToDribbble() {
        cy.visit(baseUrl);
        commonMethods.setCrossOriginUncaughtErrorFalse();
    }
}

export const visitPage = new VisitPage()