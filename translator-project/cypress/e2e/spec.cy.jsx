describe('template spec', () => {
  it('prints input on screen', () => {
    cy.visit("http://localhost:5173")
    cy.viewport(1350, 2500)

    const text = " The | El\nlittle | pequeño\nroadside-restaurant | restaurante al lado de la carretera\nsat | se sentaba\nin | en\nthe | la\nshadow | sombra\nof | de\na | un\ncolossal | colosal\nred-transport-truck | camión de transporte rojo\n, | ,\nproudly | con orgullo\ndisplaying | mostrando\nits | su\naffiliation | afiliación\nwith | con\nthe | la\n“OKLAHOMA CITY TRANSPORT COMPANY” | “OKLAHOMA CITY TRANSPORT COMPANY”\nin | en\nbold | grandes\nletters | letras\n. | ."


    cy.contains('Play')
    cy.get('[placeholder="English"]').type(text)
    cy.get('button').click()

    // cy.get('span').contains('also').within(() => {
    //   cy.get('br').should('exist')
    // })
    // cy.get('span').contains(text).within(() => {
    //   cy.get('br').should('exist');
    // }); 
  })
})