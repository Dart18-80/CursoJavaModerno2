/// <reference types="cypress"/>

describe('Cargar la pagina Principal', () => {

    it('Cargar la Pagina Principal', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Kiba');

        cy.get('[data-cy="propietario-input"]')
            .type('Diego');
        
        cy.get('[data-cy="telefono-input"]')
            .type('42308011');

        cy.get('[data-cy="fecha-input"]')
            .type('2021-08-18');
        
        cy.get('[data-cy="hora-input"]')
            .type('20:30');

        cy.get('[data-cy="sintomas-textarea"')
            .type('No como y solo duerme');

    });
});