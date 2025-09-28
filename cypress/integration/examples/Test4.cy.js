describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#alertbtn').click();
cy.get('#confirmbtn').click();


// window alert
cy.on('window:alert',(str) => {

    // Mocha
    expect(str).to.equal('Hello, share theis practice page and shre your knowledge')
})

 
 
 
 
})
 
 
} )
 