//This is not a test case, it is a process Automation Code. 
//import { faker } from '@faker-js/faker';
//import { first } from 'cypress/types/lodash';
//const firstName =faker.name.firstName();
//const mobileNumber =faker.phone.phoneNumber('966#######');

describe ('Intellirent Basic Sign Up Automation', function()


{
    it ('MyIntellirent Basic Sign Up Automation', function()
    {

        cy.visit ('https://up-stage-second.herokuapp.com/sessions/new')
        //.visit allows you to visit a link

        cy.get('#exampleInputEmail1').type('auto_mation@myintellirent.com')
        cy.get('#password').type('password')
        cy.get('.btn').click() 
        cy.wait(3000) //3 seconds time break for next page to load 

        //PERSONAL INFORMATION PAGE AUTOMATION CODE:

        cy.get('#coapplicant-count').select('0').should('have.value', '0').and('be.enabled');
        //^dropdown menu

        cy.get('#applicant_first_name').type('firstName').should('be.visible')
        cy.get('#applicant_last_name').type('secondName')
        cy.get('#applicant_dob').type('02021999')
        cy.get('#applicant_phone_details_attributes_0_phone_number').type('3213215544')
        cy.get('#applicant_ssn').type('666622631')
        cy.get('.photo-id-select').select('Passport').should('have.text', 'Passport')
        //^dopdown menu

        cy.get('#applicant_photo_ids_attributes_0_id_number').type('20202251')
        cy.get('#applicant_photo_ids_attributes_0_issuing_government').type('California')
        cy.get('#applicant_photo_ids_attributes_0_license_exp_date').type('02022030')
        cy.get('.btn-pay').click() 

        //TENANCY INFORMATION PAGE AUTOMATION CODE:
        cy.wait(3000)
        cy.get('.own > label').click()
        cy.wait(2000)
        cy.get('#applicant_address_lookup').type('12345678')
        cy.get('#address_street_info_1').type('123 Huntsville Alabama')
        cy.get('#address_city').type('Huntsville')
        cy.get('#address_state').select('Alabama')
        cy.get('#address_postal_code').type('65011')
        cy.get('#address_move_in_date').type('02022010')
       // cy.get('#address_landlord_name').type('Jack')
        //cy.get('#address_rent_amount').type('1000',{force: true}) //Using {Force:True} because element covered by another element 
        //cy.get('#address_landlord_email').type('testmen57@gmail.com')
        //cy.get('#address_landlord_phone').type('2223331234')
        //cy.get('#reason_area_field').type('NA')
        cy.get('.own-fields > .col-md-12 > .form-group > #reason_area_field').type('NA')
       // cy.get('#new_address > .button-area > .btn-pay').click()
       cy.get('#new_address > .button-area > .btn-pay').click()
        //Prior Address 
        cy.get('.prior-address-false > label').click()
        cy.get('#new_additional_address_form > .button-area > .btn-pay').scrollIntoView().click()


        // Employment information page 
        cy.get('.fin-checkbox-no > label').click()
        cy.get('.button-area > #guarantor-btn').click()
        cy.wait(1500) 
        cy.get('#guarantor-btn').click()

        cy.get('.selfemployed > label').click()
        cy.get('.self-un-employed-fields > :nth-child(1) > .form-group > #applicant_employers_attributes_0_name').type('Manager')
        cy.get('#employer_area_field').type('Google')
        cy.get(':nth-child(3) > .form-group > #applicant_employers_attributes_0_income').type('5000')  

        cy.get('#present-address > #edit_applicant_11749 > .button-area > .btn-pay').click()
        cy.get('.prior-employer-false > label').click()
        cy.get('#profile > #edit_applicant_11749 > .button-area > .btn-pay').click()

        // Additional Information 
        cy.get('.vehicle-no > label').click()
        cy.get('#new_vehicle_form > .button-area > .btn-pay').click()
        cy.get('.has-pet-false > label').click()
        cy.get('#edit_pet_4889 > .button-area > .btn-pay').click()

        // Background Information 
       // cy.get('[type="radio"]').check()
        cy.get('#295').click()
        cy.get('#answer_295').type('This is not imp')
       cy.get('#296').click()
       cy.get('#answer_296').type('I dont care')
       cy.get('#297').click()
       cy.get('#answer_297').type('Alrighty')
       cy.get('.btn-pay').click()

        //Terms of service 
       cy.get('#text-tab > .error').click()
       cy.get('#sign_detail_text_signature').type('This is my sign')
       cy.get('.btn-pay').click()

       //Payment Page 
       cy.get('#new-property-id').invoke('show')
       cy.get('#new-property-id').each(($e1, index, $list) => {
 
        if($e1.text()==="1/2 Maple Avenue")
        {
            $e1.click()
        }
     
     
    })
       cy.get('#move_in_date').type('02022023')
       cy.get('#card_number').type('4242424242424242')
       cy.get('#name').type('Jack')
       cy.get('#card_exp_date').type('0228')
       cy.get('#card_code').type('786')
       cy.get('.button-area > .btn-pay').click()
       cy.wait(1000)

       //Exam Page (Unlike to work on Production environment)
       cy.contains('Alfred Ingram').click()
       cy.contains('123rd').click()
       cy.contains('Deer').click()
       cy.get('.btn-pay').click()


    }
    )
}
)

