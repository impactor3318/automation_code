//This following code covers all possible web UI elements 

describe('This a complete automation code', function()
{

it('Complete automation test', function()
{

cy.visit("http://qaclickacademy.com/practice.php") 

//Radio Buttons 
cy.get('[type="radio"]').check('radio1').should('be.checked')
cy.get('[value="radio2"]').should('not.be.selected')

//Dropdown Menu
cy.get('#dropdown-class-example').select('Option1')
//cy.get('#dropdown-class-example').select('[value="option2"]')

//Checkboxes 
cy.get('input[type="checkbox"]').check(['option2','option3', 'otpion1']);


//URL testing, opening URL that goes to new tab, in the same CY window
//cy.get('#opentab').invoke('removeAttr', 'target').click()

//Interacting with a hidden element
cy.get('#hide-textbox').click()
cy.get('#displayed-text').invoke('show')
cy.get('#displayed-text').type('Displayed').should('be.visible')

// Mouse hovers with menu 
cy.contains('Top').click({force: true}) //this will click the mouse hover element even when not visible 
cy.url().should('include', 'top') //validating new URL after the element click 

cy.get('.mouse-hover-content').invoke('show')
cy.contains('Reload').click()

//cy.go(Back or Forward takes a page back or forward using browser controls)

//Autocomplete dropdown with dynamic options 
cy.get('#autocomplete').type('Pa'); 
cy.wait(1000);

cy.get('.ui-menu-item-wrapper').each(($e1, index, $list) =>
{
    if($e1.text()==='Pakistan')
    {
        $e1.click()
    }
}

)
cy.get('#autocomplete').should('have.value', 'Pakistan'); 

// Interacting with Web Tables 

cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
        
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('29')
        })
    }
 
})

// Interacting with Child Windows and handling Frames on a page 



})

})
