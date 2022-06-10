export class CommonMethods {

    setCrossOriginUncaughtErrorFalse() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }

    clickOnVisibleElement(selector) {
        cy.get(selector).should('be.visible').click();
    }

    typeTextIntoElement(selector, text) {
        cy.get(selector).type(text)
    }

    typeUsername(selector, text) {
        cy.get(selector).type(text, {log: false})
    }

    typePassword(selector, text) {
        cy.get(selector).type(text, {log: false})
    }


}

export const commonMethods = new CommonMethods()