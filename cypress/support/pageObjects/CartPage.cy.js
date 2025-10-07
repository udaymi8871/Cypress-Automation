import ConfirmationPage from '../..support/pageObjects/ConfirmationPage'
class CartPage {



    chekoutItems() {

        cy.contains('button', 'checkout').click()

        return new ConfirmationPage()
    }

    sumOfProducts() {

        let sum = 0;

        cy.get('tr td:nth-child(4) strong').each(($el) => {
            const amount = Number($el.text().split(" ")[1].trim())
            sum = sum + ammount
        }).then(() => {

            return sum

        })
    }
}
export default CartPage;