describe('RCP Sign in', () => {

    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     if (err.message.includes('Cannot read properties of undefined')){
    //         return false

    //     }

    //   });

    it.only('Log into RCP', () => {
        cy.visit('/signin')
        cy.get('input[name="username"]')
            .type("jlakmali+mar23@openprovider.nl")
        cy.get('input[name="password"]')
            .type("Donkey@321")
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        //assert
    })

    it('fill personal info', () => {

        cy.get('input[name="firstName"]').type("QA")
        cy.get('input[name="lastName"]').type("Automation user")
        cy.get('.iti__flag-container').click()
        cy.get('[data-country-code="lk"]').click()
        cy.get('input[type="tel"]').type("775678789")
        cy.wait(5000)
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
    
         //cy.screenshot()
         //assert
     })

    //  it.only('click submit', () => {

        
    //     cy.on('uncaught:exception', (err, runnable) => {
    //         expect(err.message).to.include('Cannot read properties of undefined')
        
    //         // using mocha's async done callback to finish
    //         // this test so we prove that an uncaught exception
    //         // was thrown
        
    //         // return false to prevent the error from
    //         // failing this test
    //         return false
    //       })
        
    //       // assume this causes an error
          
    //     cy.wait(5000)
         
    //   })

 
     it.only('select account type', () => {
        cy.wait(2000)
         cy.get('input[value="PERSONAL"]').click()
         cy.wait(5000)
         cy.contains('Next').should('be.visible').click({force : true}).wait(3000).click()
         cy.wait(5000)
          //assert
      })

      it.only('Fill more info', () => {

        cy.get('input[name="city"]').type("Colombo")
        cy.get('input[name="street"]').type("pettah Street")
        cy.get('input[name="number"]').type("123")
        cy.get('input[name="zipcode"]').type("11015")
        cy.get('.background--x-light-grey').click()
        cy.contains('USD').click()
        cy.get('button disable[type="submit"]').click()

        
    
         //cy.screenshot()
         //assert
     })

})
