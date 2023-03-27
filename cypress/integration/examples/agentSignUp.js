describe('This is agent sign up for Intellirent', function()

{

it('Agent Sign Up', function()

{
cy.visit('https://up-stage-second.herokuapp.com/sessions/new')
cy.get('#exampleInputEmail1').type('testphone2@myintellirent.com')
cy.get('#password').type('LMOJIiVZEzBuY')
cy.get('.btn').click() 
cy.wait(2000);

cy.get('#category').select('Property Manager')
cy.get('#first_name').type('Agent')
cy.get('#last_name').type('Bond')
cy.get('#agent_address_lookup').type('007 bond street London')
cy.get('#street_info_1').type('007 bond street London')
cy.get('#city').type('New York')
cy.get('#state').select('New York')
cy.get('#postal_code').type('85080')
cy.get('#phone_number').type('3434343434')
cy.get('.save_info_btn').click()
}
)

}


)

