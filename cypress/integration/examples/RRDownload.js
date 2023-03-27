//This automation code is written   
//Automatic download of the Renter Resume and test pagination of in MyIntellirent Production 

describe('Renter Resume download automation', function()
{

it('Renter Resume download automation for Production', function()
{
    cy.visit('https://www.myintellirent.com/sessions/new');
    cy.get('#exampleInputEmail1').type('admin@myintellirent.com')
    cy.get('#password').type('Int3llir3nt123')
    cy.get('.btn').click()
    cy.get(':nth-child(2) > .first-columns-applicant > .row > .address-col > .applicant-mobile-date > .applicant-info > .applicant-name').click()
    cy.get('a > .btn').click()
    cy.get('.download-details-btn > img').click()
    cy.wait(10000);
    cy.get('.col-md-9 > .navarea > :nth-child(1) > .applicant_drop_down > :nth-child(1)').click()
    cy.get('#per-page-drop-down').select('20 per page')
    cy.get('#per-page-drop-down').select('10 per page')
    cy.wait(7000);
    cy.get('.upper-pagination > ul > :nth-child(2)').click({force: true})
    cy.wait(5000);
    cy.get('.next').click()
    cy.get('.col-md-9 > .navarea > :nth-child(1) > .properties_drop_down > [href="/agent/properties"]').click()
    cy.get('.next').click()



}
)

})

