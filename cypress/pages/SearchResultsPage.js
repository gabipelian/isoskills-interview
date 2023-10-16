import {searchResultsSelectors} from "../data/Selectors";

export class SearchResultsPage {
    assertResult(expectedResult) {
        cy.contains(searchResultsSelectors.PRODUCT_TITLE, expectedResult);
    }
}

export const searchResults = new SearchResultsPage();