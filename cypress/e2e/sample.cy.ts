/**
 * Feature:
 */

describe('sample spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('.cypress').click().get('.title').should('have.text', 'Cypress')
  })
})
