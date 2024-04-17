///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidades: Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
        
    });
    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('fragagraf@gmail.com')
        cy.get('#password').type('Gui220908@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, fragagraf (não é fragagraf? Sair)')
        
    })

    it('Deve exibir uma mensagem de erroa ao inserir usuário inválido ', () => {
        cy.get('#username').type('fragaf@gmail.com')
        cy.get('#password').type('Gui220908@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')

        
    });
    it('Deve exibir uma mensagem de erro ao inserir senha inválida ', () => {
        cy.get('#username').type('fragagraf@gmail.com')
        cy.get('#password').type('Gui22090')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
        
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, fragagraf (não é fragagraf? Sair)')
        

        
    });

    it.only('Deve fazer login com sucesso - Fixture', () => {
        cy.fixture('perfil').then( dados => {

         cy.get('#username').type(dados.usuario)
         cy.get('#password').type(dados.senha, {log:false})
         cy.get('.woocommerce-form > .button').click()
         //cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, fragagraf (não é fragagraf? Sair)')

        })


    });
       
})