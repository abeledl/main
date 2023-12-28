/// <reference types="Cypress" />

import React from 'react'
import PrompterComponent from '../Prompter'

describe('<PrompterComponent />', () => {
  it('renders prompter', () => {
    cy.viewport(1550, 1750) 
    const data = ["abel", "world", "idk", "just", "some", "empty", "data"]
    var breakline =  [false, false, false, false, false, false, false] 
    const setBreakline = (data) => {breakline = data}
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <PrompterComponent
        data={data}
        breakLineTracker={breakline}
        setBreakLineTracker={setBreakline}
      />)

    cy.get('span').should('have.length', data.length * 2)
  })
})