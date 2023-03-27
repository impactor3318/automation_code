describe ('Intellirent Basic Sign Up Automation', function()


{
    it ('MyIntellirent Basic Sign Up Automation', function()
    {

        cy.visit ('https://up-stage-second.herokuapp.com/sessions/new')
        

        cy.get('#exampleInputEmail1').clear().should('be.visible')

        cy.get('#exampleInputEmail1').type('admin@myintellirent.com')
        cy.get('#password').type('abcd1234')
        cy.get('.btn').click() 
        cy.wait(3000)


        cy.visit ('https://up-stage-second.herokuapp.com/agent/managers/syndication_partners')

        cy.get(':nth-child(1) > :nth-child(7) > .btn').invoke('removeAttr', 'Target').click().should('have.text', 'Zillow')

        cy.go('Back')
        cy.reload()

        cy.url().should('include', 'intellirent') 


    })
}) 
