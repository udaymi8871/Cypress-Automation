import HomePage from "../../support/pageObjects/Homepage.cy";

describe('End to End ecommerce Test', function () {

    before(function () {

        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new HomePage()

        })

    })

    it('Submit Order', function () {


        const productName = this.data.productName
         homepage = new HomePage()
        this.homepage.goTo('https://rahulshettyacademy.com/loginpagePractise/#')
        const productPage = homepage.login(this.data.username, this.data.password)

        productPage.pageValidation()
        productPage.verifyCardLimit()
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.goToCart()
        cartPage.sumOfProducts().then(function (sum) {
            expect(sum).to.be.lessThan(200000);
        })

        const ConfirmationPage = cartPage.checkoutItems()

        ConfirmationPage.submitFormDetails()
        ConfirmationPage.getAlertMessage().should('contain', 'success')
    });
});