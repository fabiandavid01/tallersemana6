describe('Editar Design - Sección', () => {

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

    it('Editar sección', () => {

        cy.get('#ember41').click();
        cy.get('#ember66').click({force:true}).type('Columna editada');
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
    })
})