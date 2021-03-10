//Prueba para cancelar la invitación a un colaborador
describe('Cancelar invitación a colaborador', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(3000)
        cy.get('form').within(() => {
            cy.get('input[id="ember8"]').type('fd.gil10@uniandes.edu.co')
            cy.get('input[id="ember10"]').type('Bogota2020')
            cy.get('button[id="ember12"]').click()
        })
        cy.wait(1000)
    })

    it('Desinvitar colaborador', () => {

        cy.get('a[id="ember38"]').click();
        
        cy.get('section.gh-canvas.tags-view').should('be.visible');
        cy.get('#ember39').click();
        cy.get('button.gh-btn > span').click();

        let correo = `alguien${Math.random() * (20 - 5)}@gmail.com`; 
        cy.get('input[id="new-user-email"]').click({force:true}).type(correo);
        cy.get('button.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click();
        
        cy.visit('http://localhost:2368/ghost/#/staff')
        cy.wait(3000)
        cy.get(':nth-child(1) > .apps-card-app > .apps-card-right > .apps-configured > .red-hover').eq(0).click({force:true});
    })
})