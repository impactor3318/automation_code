describe('Testing on a demo bank wesbite', function()

{
    it('Testing on a demo bank wesbite', function()
    {


cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
cy.wait(2000);
cy.get('#loginPanel > :nth-child(3) > a').click()

// Sign Up form for the user 
cy.get('.form2').click()
cy.get(':nth-child(1) > [width="20%"]').type('John')

cy.get(':nth-child(2) > [width="20%"]').type('Smith')

cy.get(':nth-child(3) > [width="20%"]').type('007 Bond Street')

cy.get(':nth-child(4) > [width="20%"]').type('London')

cy.get(':nth-child(5) > [width="20%"]').type('London')

cy.get(':nth-child(6) > [width="20%"]').type('00799')

cy.get(':nth-child(7) > [width="20%"]').type('007007007')

cy.get(':nth-child(8) > [width="20%"]').type('6321852741')

cy.get(':nth-child(10) > [width="20%"]').type('username025')

cy.get(':nth-child(11) > [width="20%"]').type('theagent1')

cy.get(':nth-child(12) > [width="20%"]').type('theagent1')
cy.get('[colspan="2"] > .button').click()

cy.get('#leftPanel > ul > :nth-child(1) > a').click()


cy.get('#type').select('SAVINGS').should('have.value', '1').and('be.visible');
cy.wait(3000);
cy.get('form.ng-valid > div > .button').dblclick() //creates multiple accounts by double clicking 
cy.get('.ng-submitted > div > .button').dblclick()
cy.wait(1000);

cy.get('#leftPanel > ul > :nth-child(4) > a').click().should('be.visible')

cy.get(':nth-child(1) > [width="20%"] > .input').type('James')

cy.get(':nth-child(2) > [width="20%"] > .input').type('111 Maple Street')

cy.get(':nth-child(3) > [width="20%"] > .input').type('New York')

cy.get(':nth-child(4) > [width="20%"] > .input').type('New York')

cy.get(':nth-child(5) > [width="20%"] > .input').type('66085')

cy.get(':nth-child(6) > [width="20%"] > .input').type('625811155')

cy.get(':nth-child(8) > :nth-child(2) > .input').type('111000555')

cy.get(':nth-child(9) > [width="20%"] > .input').type('111000555')

cy.get(':nth-child(11) > [width="20%"] > .input').type('10000')

cy.get(':nth-child(14) > :nth-child(2) > .button').click()

cy.wait(2000);
    })
}


)
