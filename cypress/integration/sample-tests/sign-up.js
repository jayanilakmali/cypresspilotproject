describe('RCP Sign up', () => {

    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     return false;
    //   });

    it.only('sign up to OP', () => {

        const emailAddress = ('jlakmali+' + (Date.now()) + '@openprovider.nl')
        cy.visit('/signup')

        // cy.server();
        // cy.route('POST', '/web/rest/v2/authentication/login').as('login');

        cy.get('input[name="email"]')
            .type(emailAddress)
        cy.get('input[name="password"]')
            .type("Donkey@1")
        cy.get('.checkmark').click()
        cy.get('button[type="submit"]').click()
        //cy.clearCookies()
        // cy.wait('@login');

        cy.wait(5000)
        cy.contains('Welcome to Openprovider!').should('be.visible');
        cy.contains('Continue ->').click()

       cy.get('input[name="firstName"]').type("QA")
       cy.get('input[name="lastName"]').type("Automation user")
       cy.get('.iti__flag-container').click()
       cy.get('[data-country-code="lk"]').click()
       cy.get('input[type="tel"]').type("123456780")
       cy.get('.button--color-primary').click()

        cy.get('input[value="PERSONAL"]').click()
        cy.get('button[type="submit"]').click()
        
        // cy.screenshot()
         //assert

        cy.get('input[name="city"]').type("Colombo")
        cy.get('input[name="street"]').type("pettah Street")
        cy.get('input[name="number"]').type("123")
        cy.get('input[name="zipcode"]').type("11015")
        cy.get('.background--x-light-grey').contains('EUR').click()
        cy.contains('USD').click()
        cy.get('button[type="submit"]').click()

        cy.contains('How big is your domain portfolio?').should('be.visible');
        cy.get('input[value="BETWEEN_500_AND_1000"]').click()
        cy.get('button[type="submit"]').click()


        cy.contains('Congratulations!').should('be.visible');
        cy.contains('Get started!').click()
        
        //cy.url().should('eq', 'https://cp.op-stage.op-stage.net/dashboard')
        cy.contains('Register New Domain').should('be.visible');
     })

})
