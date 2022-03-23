describe('RCP Sign up', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it('sign up to OP', () => {

        //const emailAddress = ('jlakmali+' + (Date.now()/1000) + '@openprovider.nl')
        cy.visit('/signup')
        cy.get('input[name="email"]')
            .type("jlakmali+testsure@openprovider.nl")
        cy.get('input[name="password"]')
            .type("Donkey@1")
        cy.get('.checkmark').click()
        cy.get('button[type="submit"]').click()
        //cy.clearCookies()
        cy.wait(5000)
        cy.contains('Continue ->').click()
        //cy.screenshot()
    
    })

    it('fill personal info', () => {

       cy.get('input[name="firstName"]').type("QA")
       cy.get('input[name="lastName"]').type("Automation user")
       cy.get('.iti__flag-container').click()
       cy.get('[data-country-code="lk"]').click()
       cy.get('input[type="tel"]').type("123456780")
       cy.get('.button--color-primary').click()
       cy.wait(5000)
       
   
        //cy.screenshot()
        //assert
    })

    it('select account type', () => {
        cy.get('input[value="PERSONAL"]').click()
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        cy.screenshot()
         //assert
     })

})
