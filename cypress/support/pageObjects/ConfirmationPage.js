class ConfirmationPage {


    submitFormDetails() {
        // Type in the country field and wait for suggestions to appear
        cy.get("#country").type("india")
        
        // Wait for suggestions to appear and then click on the first suggestion
        cy.get(".suggestions ul li a", { timeout: 10000 }).should('be.visible').click()
        
        // Click the purchase button - try multiple possible selectors
        cy.get('body').then(($body) => {
            if ($body.find('#btn-success').length > 0) {
                cy.get("#btn-success").click()
            } else if ($body.find('button:contains("Purchase")').length > 0) {
                cy.get('button').contains('Purchase').click()
            } else if ($body.find('button:contains("purchase")').length > 0) {
                cy.get('button').contains('purchase').click()
            } else if ($body.find('input[type="submit"]').length > 0) {
                cy.get('input[type="submit"]').click()
            } else if ($body.find('button[type="submit"]').length > 0) {
                cy.get('button[type="submit"]').click()
            } else {
                // Fallback: look for any button containing purchase or submit
                cy.contains(/purchase|submit/i).click()
            }
        })
        
        // Verify success message
        cy.get(".alert-success").should('contain', 'Success')
    }

    getAlertMessage(){

        return cy.get('.alert-success')
    }

}
export default ConfirmationPage;