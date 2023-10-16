export class CommonMethods {
    visitHomepage() {
        cy.visit(Cypress.env('baseUrl'));
    }

    uncaughtException() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });
    }

    parseCSV(csvString) {
        const [header, ...rows] = csvString.split('\n').map(row => row.trim()).filter(row => row.length > 0);
        const keys = header.split(',');

        return rows.map(row => {
            const values = row.split(',');
            return keys.reduce((acc, key, i) => {
                acc[key] = values[i];
                return acc;
            }, {});
        });
    };
}

export const commonMethods = new CommonMethods();
