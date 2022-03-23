describe('RCP Sign in', () => {

    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     if (err.message.includes('Cannot read properties of undefined')){
    //         return false

    //     }

    //   });

    it.only('Log into RCP', () => {
        cy.visit('/signin')
        cy.get('input[name="username"]')
            .type("jlakmali+qaautomation@openprovider.nl")
        cy.get('input[name="password"]')
            .type("Donkey@1")
        cy.get('button[type="submit"]').click()
        cy.screenshot()
        cy.wait(5000)
        cy.contains('Continue ->').click()
        //assert
    })

    it.only('fill personal info', () => {

        cy.get('input[name="firstName"]').type("QA")
        cy.get('input[name="lastName"]').type("Automation user")
        cy.get('.iti__flag-container').click()
        cy.get('[data-country-code="lk"]').click()
        cy.wait(5000)
        cy.get('input[type="tel"]').type("775678789")
        cy.wait(10000)
        
    
         //cy.screenshot()
         //assert
     })

     it.only('click submit', () => {

        
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('Cannot read properties of undefined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        
          // assume this causes an error
          cy.get('button[type="submit"]').click()
        cy.wait(5000)
         
      })

 
     it.only('select account type', () => {
        cy.wait(5000)
         cy.get('input[value="PERSONAL"]').click()
         cy.get('button[type="submit"]').click()
         cy.wait(5000)
         cy.screenshot()
          //assert
      })
})
