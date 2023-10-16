import {homepageSelectors} from "../data/Selectors";

export class HomePage {
    clickOnSearchIcon() {
        cy.get(homepageSelectors.SEARCH_ICON).last().should('be.visible').click();
    }

    searchForProduct(product) {
        cy.get(homepageSelectors.SEARCH_FIELD)
            .last()
            .clear()
            .type(product);
    }
}

export const homePage = new HomePage();