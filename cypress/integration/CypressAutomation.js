
import SamsongObject from '../integration/pageObject/SamsongObject'



describe("my first suite", function () {



    //this will run before all tests and on it  we are resolving the fixture to get the data from example.json under fixture directory
    before(function () {

        cy.fixture('example').then(function (data) {

            this.data=data
        })
    })

   
    it("first test", function () {
        // object from the pagefactory class so we can use the elemnt and the methodes there 
        const samsong = new SamsongObject()
        //open the website
        cy.visit("https://www.samsung.com/in/")


        //choose product
        samsong.getProduct().click()

        //go to cart
        samsong.getcart().click()
        //click on pay now
        samsong.payNow().click()
        
        samsong.continueAsGuest().click({ force: true })

        //select methode so we let the errors appeare on ui
        samsong.selectElements()

        //to check that when the user not fill the inputs , the warning errors will be visible
        samsong.verifyErrorsVisibility()


        // here im taking the data from the example.json and pass them to the method (send data) 
        samsong.sendData(this.data.firstname, this.data.secname, this.data.add1, this.data.add2, this.data.pin, this.data.land, this.data.email, this.data.mobile1, this.data.mobile2)
        // here to check that after filling the form , all the errors will not be visible 
        samsong.verifyNoErrorVisible()





    })
   


})