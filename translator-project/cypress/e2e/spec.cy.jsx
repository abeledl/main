describe('template spec', () => {
  it('prints input on screen', () => {
    cy.visit("http://localhost:5173")
    cy.viewport(1350, 2500)

    const text = "abel|abel\nis|es\na|un\ncat|gato\nand|y\nalso|tambien\na|un\nmouse|raton\nhe|el\nis|es\na|un\ncatmouse|gatoraton\n" 
    cy.contains('Play')
    cy.get('[placeholder="English"]').type(text)
    cy.get('button').click()

    cy.get('span').contains('also').within(() => {
      cy.get('br').should('exist')
    })
    // cy.get('span').contains(text).within(() => {
    //   cy.get('br').should('exist');
    // }); 
  })
})