describe('RCP Sign up', () => {

    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     return false;
    //   });

    it.only('search a domain', () => {
        cy.visit('https://cp.openprovider.eu/fast-checkout')
        cy.get('input[type="text"]').type('exampledomain')
       cy.get('.search-icon').click()
       cy.wait(5000)
    })

    it.only('add to cart', () => {
       cy.get('.domain-list-content')
       .get('[role=rowgroup] .domains-list-row--available')
       .find('.cell-actions').should('be.visible').contains('Add to cart').first().click({force: true})
       cy.contains('Go to the cart').click()
       //assert
       cy.get('button[type="submit"]').click()
    })

    it.only('fill primary details', () => {
        cy.get('.select').click()
        cy.get('.options--opened').contains('Sri Lanka').click()
        cy.get('input[value="PERSONAL"]').click()
        cy.get('button[type="submit"]').click()

     })
 
     it.only('fill contact details', () => {
        const emailAddress = ('jlakmali+' + (Date.now()) + '@openprovider.nl')
        cy.get('input[type="email"]')
            .type(emailAddress)
        cy.get('input[type="password"]').type('Donkey@1')
        cy.get('input[name="firstName"]').type('QA')
        cy.get('input[name="lastName"]').type('Automation User')
        cy.get('.iti__flag-container').click()
        cy.get('[data-country-code="lk"]').click()
        cy.get('input[type="tel"]').type("775678789")
        cy.get('input[name="city"]').type("Colombo")
        cy.get('input[name="street"]').type("Main Street")
        cy.get('input[name="number"]').type("123")
        cy.get('input[name="zipcode"]').type("10110")
        cy.get('button[type="submit"]').click()

     })
})