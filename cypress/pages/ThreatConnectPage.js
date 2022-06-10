import {commonSelectors} from "../data/Selectors";
import {commonMethods} from "../common/CommonMethods";

export class ThreatConnectPage {

    clickOnFiltersWhereAllOptionIsSelectedByDefault() {
        this.clickOnInspiration();
        this.assertAllOptionIsActive();
        this.clickOnFilters();
    }

    assertAllOptionIsActive() {
        cy.get(commonSelectors.categories).find(commonSelectors.all).parent()
            .should('have.class', 'active').and('be.visible');
    }

    clickOnFilters() {
        //this method verifies that filters are closed by looking into the style attr
        cy.get(commonSelectors.filters).invoke('attr', 'style', 'display: none;').should('have.attr', 'style', 'display: none;');
        //this method verifies that filters are opened by invoking 'style' attr, changing it, and reacting as an click on element.
        this.assertFiltersAreActive();
    }

    assertFiltersAreActive() {
        cy.get(commonSelectors.filters).invoke('attr', 'style', 'display: block;').should('have.attr', 'style', 'display: block;');
    }

    clickOnInspiration() {
        commonMethods.clickOnVisibleElement(commonSelectors.inspiration);
    }

    selectThisPastWeekForTimeframeAndVerifyIsPresentInDropdown() {
        this.selectThisPastWeek();
        this.assertPastWeekIsSelectedInDropdown();
        this.assertCorrectElementIsSelected();
    }

    selectThisPastWeek() {
        cy.get(commonSelectors.timeframeContainer).find(commonSelectors.dropdown).should('be.visible').click();
        cy.get(commonSelectors.thisPastWeek).click().invoke('text').as('pastWeek');
    }

    assertPastWeekIsSelectedInDropdown() {
        cy.get(commonSelectors.timeframeContainer).find(commonSelectors.dropdown).scrollIntoView().click();
        cy.get(commonSelectors.dropdownOption).find(commonSelectors.thisPastWeek)
            .should('have.class', 'active');

    }

    assertCorrectElementIsSelected() {
        cy.get('@pastWeek').then($text => {
            let pastWeek = $text.toString();
            cy.get(commonSelectors.timeframeContainer).and('contain', pastWeek)
        })
    }

    clearTimeframeFilterAndSearchForFoodInTags() {
        this.clearTimeframeFilter();
        this.assertClearTimeframeFilterIsNotVisible();
        this.searchInTagFilter('food{enter}');
    }

    clearTimeframeFilter() {
        commonMethods.clickOnVisibleElement(commonSelectors.clearTimeframeFilter);
    }

    assertClearTimeframeFilterIsNotVisible() {
        cy.get(commonSelectors.clearTimeframeFilter).should('not.be.visible');
    }

    searchInTagFilter(text) {
        cy.get(commonSelectors.tagInput).type(text);
        cy.wait(1000);
    }

    assertFirstRowIsVisibleAndLength() {
        cy.get(commonSelectors.cards).eq(0).should('have.length', '1').and('be.visible');
        cy.get(commonSelectors.cards).eq(1).should('have.length', '1').and('be.visible');
        cy.get(commonSelectors.cards).eq(2).should('have.length', '1').and('be.visible');
        cy.get(commonSelectors.cards).eq(3).should('have.length', '1').and('be.visible');
    }

    checkThePresenceOfTheSaveShotIconAndLikeThisShotIconFromFirstCard() {
        this.checkThePresenceOfTheSaveShotIcon();
        this.checkThePresenceOfTheLikeIcon();
    }

    checkThePresenceOfTheSaveShotIcon() {
        cy.get(commonSelectors.cards).first().scrollIntoView().trigger('mouseover', {force: true});
        cy.get(commonSelectors.saveShot).first().scrollIntoView().should('exist');
    }

    checkThePresenceOfTheLikeIcon() {
        cy.get(commonSelectors.cards).first().scrollIntoView().trigger('mouseover', {force: true});
        cy.get(commonSelectors.likeShot).first().scrollIntoView().should('exist');
    }

    checkTheNumberOfLikesAndViews() {
        this.checkTheNumberOfLikes();
        this.checkTheNumberOfViews();
    }

    checkTheNumberOfLikes() {
        cy.get(commonSelectors.likesNumber).first().should('be.visible').invoke('text').as('likesNumber');
        cy.get('@likesNumber').then($text => {
            let likesNumber = $text.toString();
            cy.get(commonSelectors.likesNumber).first().should('contain', likesNumber);
        })
    }

    checkTheNumberOfViews() {
        cy.get(commonSelectors.viewsNumber).first().should('be.visible').invoke('text').as('viewsNumber');
        cy.get('@viewsNumber').then($text => {
            let viewsNumber = $text.toString();
            cy.get(commonSelectors.viewsNumber).first().should('contain', viewsNumber);
        })
    }
}

export const threatConnect = new ThreatConnectPage();