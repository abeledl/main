import React from 'react'
import SpanComponent from './SpanComponent'

describe('<SpanComponent />', () => {
  it('renders', () => {
    const text = "Hello world!"
    const handleSpanInfo = () => {}
    const id = 1
    const otherData = ["hola aaa"]
    const complete = false

    // see: https://on.cypress.io/mounting-react
    cy.mount(<SpanComponent text={text} handleSpanInfo={handleSpanInfo} id={id} otherData={otherData} complete={complete}/>)
  })
})