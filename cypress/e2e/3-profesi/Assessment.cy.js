/// <reference types='cypress' />

describe('Create Assessment', () => {
    context('720p resolution', () => {
        beforeEach(() => {
          cy.viewport(1280, 720)
        })

            it('Open Profesi', () => {
                cy.visit('https://dev-company.profesi.io')
                cy.get('.mb-1').should('be.visible')
            })

            it('Login using valid account', () => {
                cy.get('[data-cy="login-email"] > .vs-component > .vs-con-input > .vs-inputx')
                .type('recruitmentqaprofesi@yopmail.com')
                .should('have.value','recruitmentqaprofesi@yopmail.com')

                cy.get('.vx-input-group-default > .vs-component > .vs-con-input > .vs-inputx')
                .type('Qapr0fes1')

                cy.get('[data-cy="login-btn-login"]').click()
                cy.wait(1000)
            })

            it('Dashboard after login', () => {
                cy.get('.con-vs-avatar').should('be.visible')
                cy.wait(1000)
            })

            it('Create Assessment', () => {
                cy.get('[data-cy="side-nav-assessment-create"] > .truncate').click()
                cy.wait(1000)
            })

            it('Input Judul Asesmen', () => {
                cy.contains('Judul Asesmen').and('be.visible')
                cy.get(':nth-child(1) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx')
                .type('Asesmen Quartal 1')
                .should('have.value','Asesmen Quartal 1')
            })
    })
})