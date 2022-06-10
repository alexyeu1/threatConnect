import {visitPage} from "../../pages/VisitPage";
import {loginPage} from "../../pages/LoginPage";
import {threatConnect} from "../../pages/ThreatConnectPage";

    beforeEach( () => {
        visitPage.navigateToDribbble();
        loginPage.insertCredentials();
    })

    it( 'Testing different scenarios for dribbble', () => {
       threatConnect.clickOnFiltersWhereAllOptionIsSelectedByDefault();
       threatConnect.selectThisPastWeekForTimeframeAndVerifyIsPresentInDropdown();
       threatConnect.clearTimeframeFilterAndSearchForFoodInTags();
       threatConnect.assertFirstRowIsVisibleAndLength();
       threatConnect.checkThePresenceOfTheSaveShotIconAndLikeThisShotIconFromFirstCard();
       threatConnect.checkTheNumberOfLikesAndViews();
    })
