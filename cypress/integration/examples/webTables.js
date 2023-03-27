import { xorBy } from "cypress/types/lodash"

describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('true')
        })
    }
 
})
 
 
})
 
 
})

cy.get('test').type('Australia')

cy.get('Menu').each(($e1, index, $list) =>
{

    if($e1.text==='Austrlia'){
        $e1.click()
    }

    cy.get('test').should('have.text', 'Austrlia')
})

