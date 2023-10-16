import {commonMethods} from "../../common/CommonMethods";
import {homePage} from "../../pages/HomePage";
import {searchResults} from "../../pages/SearchResultsPage";

beforeEach(() => {
    commonMethods.uncaughtException();
    commonMethods.visitHomepage();
})

it('should test search functionality', () => {
    const csvFileName = Cypress.env('csvFile');

    cy.readFile(`cypress/fixtures/frontend_data/${csvFileName}`).then((csvString) => {
        const categories = commonMethods.parseCSV(csvString);
        categories.forEach((category) => {
            homePage.searchForProduct(category.product);
            homePage.clickOnSearchIcon();
            searchResults.assertResult(category.product.toUpperCase());
        });
    });
});
