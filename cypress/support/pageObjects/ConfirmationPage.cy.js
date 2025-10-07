class ConfirmationPage {


    submitFormDetails() {
        cy.get("#country").type("india")
        cy.get(".suggestions ul li a").click()
        cy.get("#btn-success").click()
        cy.get(".alert-success").should('contain', 'Success')
    }

    getAlertMessage(){

        return cy.get('.alert-success')
    }

}
export default ConfirmationPage;