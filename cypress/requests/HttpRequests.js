export class HttpRequests {
    getRequest(pageNumber) {
        cy.request(`https://reqres.in/api/users?page=${pageNumber}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.page).to.eq(pageNumber);
            expect(response.body.total_pages).to.eq(2);
        });
    }

    postRequest() {
        const payload = Cypress.env('payload');

        cy.readFile(`cypress/fixtures/backend_data/${payload}`).then((payload) => {
            cy.request({
                method: 'POST',
                url: 'https:reqres.in/api/users',
                body: payload,
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.include(payload);
                expect(response.body.id).is.not.empty;
                expect(response.body.createdAt).is.not.empty;
            });
        })
    }
}

export const httpRequests = new HttpRequests();