describe('My first Test Suit', function() {


it('My First Test case', function() {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get('.search-keyword').type('ca')

    cy.wait(2000);

    // Selenium get hit url in browser, cypress get acts  like findelements of selenium

    cy.get('.product').should('have.length', 5)
    cy.get('.product:visible').should('have.length', 4)

    // parent child chaining
    cy.get('.products').find('.product').should('have.length', 4)


    //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();



    cy.get('.products').find('.product').each(($el, index, $list) => {
    const textVeg = $el.find('h4.product-name').text()
    if (textVeg.includes('Cashews')) {
        $el.find('button').click()
    }
})

cy.get('.brand')
.invoke('text')
.then((logoText) => {
cy.log(logoText)
})


 

})


})