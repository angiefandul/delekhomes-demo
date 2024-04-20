/// <reference types="cypress" />

describe('Login', () => {
    it('Login a user', () => {
      
        cy.visit("https://dev.delekhomes.com/");
        cy.contains('Login').click();
        cy.get('input[name="email"]').type('anzhelaf@yahoo.com')
        cy.get('input[name="password"]').type('12345678')
        cy.contains('Login').click()

        

    })
  })