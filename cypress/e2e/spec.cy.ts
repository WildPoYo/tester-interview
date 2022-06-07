describe('spec.cy.ts', () => {
  it('should visit', () => {
    cy.visit('http://localhost:4200/')

    cy.contains('Card')
  })
})
