//Prueba para crear un tag
describe('Prueba invitar a colaborador', () => {

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

    it('Invitar colaborador', () => {

        cy.get('a[id="ember38"]').click();
        cy.get('section.gh-canvas.tags-view').should('be.visible');
        cy.get('#ember39').click();
        cy.get('button.gh-btn > span').click();

        let correo = `alguien${Math.random() * (20 - 5)}@gmail.com`; 
        cy.get('input[id="new-user-email"]').click({force:true}).type(correo);
        cy.get('button.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click();
    })
})