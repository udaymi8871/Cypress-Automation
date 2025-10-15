import ConfirmationPage from "./ConfirmationPage";

class CartPage {



    chekoutItems() {

        // Try multiple possible selectors for the checkout button
        cy.get('body').then(($body) => {
            if ($body.find('button:contains("Checkout")').length > 0) {
                cy.get('button').contains('Checkout').click()
            } else if ($body.find('button:contains("checkout")').length > 0) {
                cy.get('button').contains('checkout').click()
            } else if ($body.find('a:contains("Checkout")').length > 0) {
                cy.get('a').contains('Checkout').click()
            } else if ($body.find('a:contains("checkout")').length > 0) {
                cy.get('a').contains('checkout').click()
            } else {
                // Fallback: look for any element containing checkout (case insensitive)
                cy.contains(/checkout/i).click()
            }
        })

        return new ConfirmationPage()
    }

    sumOfProducts() {

        let sum = 0;

        return cy.get('tr td:nth-child(4) strong').each(($el) => {
            const amount = Number($el.text().split(" ")[1].trim())
            sum = sum + amount
        }).then(() => {

            return sum

        })
    }
}
export default CartPage;