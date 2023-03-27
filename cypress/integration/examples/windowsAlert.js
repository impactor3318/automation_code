describe('Firing a window alert pop-up test', function()
{
// The code should fire alert event on browser and capture text of the string in pop-up 

    it('Firing a window alert pop-up test'), function()
    {

        cy.visit('https://www.empg.com/investor-relations')

        cy.on("windows:confirm", (str) =>  

        {
        expect(str).to.equal('Please validate that you are a human first')
        }


        )
    }
})

describe('My Test', function () {

    it('only runs if a certain element is present', function () {
      cy.get('#my-element').should('be.visible').then(($element) => {

        if ($element.length) {
          // Code to run if the element is present
          cy.get('#my-element').type('Hello, World!');
          cy.get('#my-element').should('have.value', 'Hello, World!');

        } else {
          // Code to run if the element is not present
          cy.log('The element is not present on the page');
        }
      });


    });
  });
  
  describe('File download', () => {
    it('downloads a file successfully', () => {
      cy.visit('https://example.com/downloads')
      cy.get('#download-link').click()
      
      // Wait for the file to be downloaded
      cy.wait(3000)
      
      // Check if the file exists in the downloads folder
      cy.task('checkFileExistence', { filePath: '/path/to/downloads/file.pdf' }).then(fileExists => {
        expect(fileExists).to.be.true
      })
    })
  })
  
  // Custom command to check if a file exists
  Cypress.Commands.add('checkFileExistence', (options) => {
    return cy.exec(`ls ${options.filePath}`).its('code').should('eq', 0) 
  })


  
  describe('This is a test code', function()
  {
    it('This is a test code', function(){


 cy.visit('www.myintellirent.com'); 
 cy.get('#thisElement').type('Test Name')
 cy.get('testElement').click()
 
 cy.get('adynamicdropdown').type('testcode')
 
 cy.get('newmenu').each(($e1, index, $list) =>
 {
   if ($e1.text=='selection')
   {
    $e1.click()
   }
 })
 


 
    })
  })



