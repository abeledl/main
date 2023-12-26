/// <reference types="Cypress" />

import React from 'react'
import PrompterComponent from './PrompterComponent'

describe('<PrompterComponent />', () => {
  it('renders', () => {

    const data = ["abel", "world", "idk"]
    const setCompleted = () =>{}
    const setObjectData = () => {}
    const objectData = []
    const completed = false
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PrompterComponent data={data} setCompleted={setCompleted} setObjectData={setObjectData} objectData={objectData} completed={completed}/>)

    cy.get('span').should('have.length', data.length*2)
  })
})