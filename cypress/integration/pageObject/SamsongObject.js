class SamsongObject {




    getcart() {
        return cy.get('.pd-buying-price__cta > .cta')
    }

    payNow() {


        return cy.get(".os-btn-holder.p6-pt0")
    }


    continueAsGuest() {
        return cy.get("#b2C_Continue_Guest")
    }

    getFirstNameElement() {
        return cy.get('input[name="firstName"]')
    }


    getLastNameElement() {
        return cy.get("input[data-vv-as='Last Name']")
    }
    getFirstAddressElement() {
        return cy.get("input[data-vv-as='Address Line 1']")
    }
    getSecAddressElement() {
            return cy.get("input[data-vv-as='Address Line 2']")
    }

    getPincodeElement() {
            return cy.get("input[data-vv-as='Pincode']")
    }
       
    getLandmarkElement() {
            return cy.get("input[data-vv-as='Landmark']")
    }

    getEmailElement() {
            return cy.get("input[data-vv-as='Email']")
    }



    getMobileElement() {
            return cy.get("input[data-vv-as='Mobile Number']")
    }


    getAltMobileElement() {
            return cy.get("input[data-vv-as='Alternate Number']")
    }

   
    selectElements() {
        this.getFirstNameElement().click()
        this.getLastNameElement().click()
        this.getFirstAddressElement().click()
        this.getSecAddressElement().click()
        this.getPincodeElement().click()
        this.getLandmarkElement().click()
        this.getEmailElement().click()
        this.getMobileElement().click()
        this.getAltMobileElement().click()



    }

    getErrorElements() {
        return cy.get("form[data-vv-scope='shippingForm']").find(".input-error-msg:visible")
    }




    verifyErrorsVisibility() {


        this.getErrorElements().each(($el, index, $list) => {


            const str = $el.text()
            expect(str).to.equal('\n    This is a required field.\n  ')




        })
    }



    verifyNoErrorVisible() {
        cy.get("form[data-vv-scope='shippingForm']").find(".input-error-msg").each(($el, index, $list) => {



            cy.wrap($el).should('not.be.visible')



        })
    }
    getProduct() {
         return cy.get('[an-tr="co05_showcase card tab-home-image-swipe1"] > .showcase-card-tab-inner-container > :nth-child(5) > .showcase-card-tab-card__full-bleed-wrap > .showcase-card-tab-card__img-wrap > .showcase-card-tab-card__product-img')

    }



    sendData(firstName,SecName,add1,add2,pin,land,email,mobile1,mobile2) {


        this.getFirstNameElement().type(firstName)
        this.getLastNameElement().type(SecName)
        this.getFirstAddressElement().type(add1)
        this.getSecAddressElement().type(add2)
        this.getPincodeElement().type(pin)
        this.getLandmarkElement().type(land)
        this.getEmailElement().type(email)
        this.getMobileElement().type(mobile1)
        this.getAltMobileElement().type(mobile2)

    }
    


}
export default SamsongObject;