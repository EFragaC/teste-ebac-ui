/// <reference types="cypress"/>


describe('Funcionalidade: produtos', () => {

    beforeEach(() => {
            
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {

       cy.get(' .products > .row')
        //cy.get('.block-inner')
            //.first()
            //.last()
           // .eq(3)
            .contains('Ajax Full-Zip Sweatshirt')
            //.contains('Apollo Running Short')
            .click()

            cy.get('#tab-title-description > a').should('contain' , 'Descrição')
           

        
    });
});