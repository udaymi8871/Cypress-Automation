describe("Kod Landing First Test Suite", function() {

    it("Landing Page", function() {


        cy.visit("https://app.kodnest.com/login");

        cy.get("#email-input").type("uday+kodd1@kodnest.com");

        cy.get('[name="password"]').type("Uday@123");

        cy.get('#login-submit-button').click();

        // Wait for login to complete
       cy.get('#profile-menu-item', { timeout: 10000 })
            .should('be.visible')
            .click();ss
       

    })
})