/// <reference types="cypress"/>

describe('LLena los campos para una nueva cita y lo muestra', () => {

    it('Campos nueva cita', () => {
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

        cy.get('[data-cy="submit-cita"]')
            .click();

         cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas ');

        //Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');
        
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success');

    });
});