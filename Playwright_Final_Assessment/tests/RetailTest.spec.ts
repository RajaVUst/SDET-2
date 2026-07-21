import {test} from '../fixtures/endToend'
import {Data}  from '../config/Config'
import {userData}  from '../testData/userData'

test.describe("RETAIL MART", ()=>{

    test("Scenario1",async({home,product,log,evidence})=>{

       log.info("Started Searchinhg");
        await home.search("laptop")

        log.info("Product Filtering");
        await product.filter("$250 & Above")

    })

    test("Scenario2",async({home, product,pdp,cart,checkout,payment,log,evidence})=>{

         log.info("Started Searchinhg Laptop");
        await home.search("laptop")


         log.info("Product Filtering");
        await product.filter("$250 & Above")

          log.info("Selected Product");
        await pdp.selectProduct()

         log.info(" Product added to cart");
        await pdp.addToCart()

        log.info(" Proceed to checkout");
        await cart.ProceedToCheckout()

        log.info("Checkout Details");
        await checkout.checkoutDetails(Data.name,Data.email,Data.phone,
            userData.valid.street, userData.valid.city, userData.valid.zip,
            userData.valid.state, userData.valid.country)


            log.info(" Payment details");
        await payment.checkPayment(Data.name,Data.card,Data.expiry,Data.cvv) 


    })
    

})  


 
       


