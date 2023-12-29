import React from 'react'
import Span from '../Span'

describe('<Span />', () => {
  const word = 'test'
  const updateBreaklineFlags = () => { }
  const breaklineFlags = [false]

  it('renders span', () => {
    cy.mount(
      <Span
        word={word}
        updateBreaklineFlags={updateBreaklineFlags}
        id={0}
        breaklineFlags={breaklineFlags}
      />)
    cy.contains(word).should('exist')
  })


  const wordWithBreakline = 'testwbr'
  const breaklineFlagsTrue = [true]
  it('renders span with breakline', () => {
    cy.mount(
      <Span
        word={wordWithBreakline}
        updateBreaklineFlags={updateBreaklineFlags}
        id={0}
        breaklineFlags={breaklineFlagsTrue}
      />)
    cy.get('br').should('exist')
  })


  const wordNoBreakline = 'testnobr'
  const breaklineFlagsFalse = [false]
  it('renders span with no breakline', () => {
    cy.mount(
      <Span
        word={wordNoBreakline}
        updateBreaklineFlags={updateBreaklineFlags}
        id={0}
        breaklineFlags={breaklineFlagsFalse}
      />)
    cy.get('br').should('not.exist')
  })
})