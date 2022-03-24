describe('RCP Sign up', () => {

    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     return false;
    //   });

    it.only('sign up to OP', () => {

        const emailAddress = ('jlakmali+' + (Date.now()/1000) + '@openprovider.nl')
        cy.visit('/signup')
        cy.get('input[name="email"]')
            .type(emailAddress)
        cy.get('input[name="password"]')
            .type("Donkey@1")
        cy.get('.checkmark').click()
        cy.get('button[type="submit"]').click()
        //cy.clearCookies()
        cy.wait(5000)
        cy.contains('Continue ->').click()
        //cy.screenshot()
    
    })

    it.only('fill personal info', () => {

       cy.get('input[name="firstName"]').type("QA")
       cy.get('input[name="lastName"]').type("Automation user")
       cy.get('.iti__flag-container').click()
       cy.get('[data-country-code="lk"]').click()
       cy.get('input[type="tel"]').type("123456780")
       cy.get('input[name="firstName"]').click()
       cy.wait(2000)
       cy.get('.button--color-primary').click()
       cy.wait(5000)
       
   
        //cy.screenshot()
        //assert
    })

    it.only('select account type', () => {
        cy.get('input[value="PERSONAL"]').click()
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        cy.screenshot()
         //assert
     })

     it('Fill more info', () => {

        cy.get('input[name="city"]').type("Colombo")
        cy.get('input[name="street"]').type("pettah Street")
        cy.get('input[name="number"]').type("123")
        cy.get('input[name="zipcode"]').type("11015")
        cy.get('.background--x-light-grey').click()
        cy.contains('USD').click()
        cy.get('button[type="submit"]').click()

        
    
         //cy.screenshot()
         //assert
     })

})
