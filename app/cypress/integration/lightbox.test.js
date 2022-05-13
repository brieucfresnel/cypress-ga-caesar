describe('lightbox', () => {
    beforeEach('', () => {

    })

    it('should close lightbox, click away from image', () => {
        cy.dataCy('lightbox-overlay').click();
        cy.get('body').click(0, 0);
        cy.dataCy('unliked-svg').click();
    })

    it('should close lightbox, click away from image', () => {
        cy.dataCy('lightbox-overlay').click();
        cy.dataCy('lightbox').scrollTo ('bottom');

        cy.dataCy('unliked-svg').should('not.be.visible');
        cy.dataCy('liked-svg').should('be.visible');

    })

})