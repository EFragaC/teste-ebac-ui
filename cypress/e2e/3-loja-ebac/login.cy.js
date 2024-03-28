///<reference types="cypress"/>

describe('Funcionalidades: Login', () =>{
    it('Deve fazer login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('fragagraf@gmail.com')
        cy.get('#password').type('Gui220908@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, fragagraf (não é fragagraf? Sair)')
        
    })
})