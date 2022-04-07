describe('RCP Sign in', () => {


    it.only('Log into RCP', () => {
        cy.visit('/signin')
        cy.get('input[name="username"]')
            .type("jlakmali+mar23@openprovider.nl")
        cy.get('input[name="password"]')
            .type("Donkey@321")
        cy.get('button[type="submit"]').click()

        
     })

})
