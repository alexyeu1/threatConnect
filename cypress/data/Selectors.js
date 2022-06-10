const commonSelectors = {
    "signIn": "[data-site-nav-element='Sign in']",
    "userName": "[name='login']",
    "password": "[name='password']",
    "submit": "[type='submit']",
    "categories": ".filter-categories",
    "all": "[title='All']",
    "inspiration": "[data-site-nav-element='Inspiration']",
    "filters": ".shot-filters",
    "timeframeContainer": ".find-shots-timeframe",
    "dropdown": ".btn-dropdown",
    "dropdownOption": ".btn-dropdown-options",
    "thisPastWeek": "[data-value='week']",
    "clearTimeframeFilter": "[data-param='timeframe']",
    "tagInput": "[name='tag']",
    "cards": ".shot-thumbnail-link",
    "saveShot": "[title='Save shot']",
    "likeShot": "[title='Like this shot']",
    "likesNumber": ".js-shot-likes-count",
    "viewsNumber": ".js-shot-views-count"
}

module.exports = {
     commonSelectors
}