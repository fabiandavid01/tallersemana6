//Prueba para crear un tag
describe('Prueba la pagina ghost', () => {

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


    it('Crear Tag', () => {

        cy.get('a[id="ember38"]').click();
        cy.get('section.gh-canvas.tags-view').should('be.visible');
        cy.get('#ember63 > span').click();
        
        cy.get('input[id="tag-name"]').click({force:true}).type('Nombre Tag');
        cy.get('input[id="tag-slug"]').click({force:true}).type('Slug');
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();

        //Verificar que si se creo
        cy.get('a[id="ember38"]').click()
        cy.get('h3').then(($item) => {
            expect($item[3].innerText).to.equal('PruebaPositiva')
        })

        

        //cy.get('#ember97 > span').click();

        //cy.get('a[id="ember38"]').click();

        //cy.get('input[name="accent-color"]').click({force:true}).type('FF5733')

        //cy.get('header.gh-canvas-header').within(() => {
        //    cy.get('button').click()
        //})
        //Verificar que si se creo
        //cy.get('a[id="ember38"]').click()
        //cy.get('h3').then(($item) => {
        //    expect($item[3].innerText).to.equal('PruebaPositiva')
       // })
    })

})