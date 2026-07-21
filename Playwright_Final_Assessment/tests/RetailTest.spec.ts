import {test} from '../fixtures/endToend'
import {Data}  from '../config/Config'
import {userData}  from '../testData/userData'

test.describe("RETAIL MART", ()=>{

    test("Scenario1",async({home,product,log,evidence})=>{

        log.info("");
        await home.search("laptop")

        await product.filter("$250 & Above")

    })

    test("Scenario2",async({home, product,pdp,cart,checkout,payment,log,evidence})=>{

        await home.search("laptop")

        await product.filter("$250 & Above")

        await pdp.selectProduct()

        await pdp.addToCart()

        await cart.ProceedToCheckout()

        await checkout.checkoutDetails(Data.name,Data.email,Data.phone,
            userData.valid.street, userData.valid.city, userData.valid.zip,
            userData.valid.state, userData.valid.country)

        await payment.checkPayment(Data.name,Data.card,Data.expiry,Data.cvv) 


    })
    

})  


 
       





//assertion
//log
//testData
//CI/CD