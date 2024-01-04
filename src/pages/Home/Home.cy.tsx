import 'the-new-css-reset/css/reset.css'
import '@themes/index.scss'
import '@App.scss'

import Home from './index'

describe('<Home />', () => {
  it('should render correctly', () => {
    cy.mount(<Home />)
    cy.get('.title').contains('x-react-template')
    cy.get('.read-the-docs').should(
      'have.text',
      'Click on logos to learn more. Press buttons to change the counter.',
    )
    cy.get('.list-of-supported-tools').children().should('have.length', 9)
    cy.get('.counter-number').should('have.text', 'Count: 0')
  })

  it('should increase the counter to 2 when the "Add Amount" button is clicked', () => {
    cy.mount(<Home />)
    cy.get('.counter-number')
      .contains('Count: 0')
      .get('.counter-input > :nth-child(2)')
      .click()
      .get('.counter-number')
      .contains('Count: 2')
  })
})
