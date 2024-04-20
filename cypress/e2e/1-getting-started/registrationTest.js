/// <reference types="cypress" />

describe('Registration', () => {
    it('Register new user', () => {
      
        cy.visit("https://dev.delekhomes.com/");
        cy.contains('Register').click();

        //Filling out the form:
        cy.get('input[name="firstName"]').type('Anzhela');
        cy.get('input[name="lastName"').type('Fandul');
        cy.get('input[name="email"]').type('anzhelaf@yahoo.com')
        cy.get('input[name="password"]').type('12345678')

        //check checkbox:
        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
        
        cy.get('button[type="submit"]').click();

    })
  })