context('Hello world', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should complete the cypher form', () => {
        cy.dataCy('cypher-key')
            .clear()
            .type(3);

        cy.dataCy('cypher-text')
            .type('Hello world')

        cy.dataCy('cypher-submit')
            .click();

        cy.dataCy('cypher-result')
            .should('have.text', 'Khoor zruog');
    })
})