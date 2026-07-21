import {test} from "../fixture/ShopFixture"
import {Env} from "../utils/Env"
import {User} from "../test-data/user"
test("Verify tehe Shipping Charges before and after the threshold value",async({test1,log,evidence})=>
{
    await test1.searchProduct("Book")
    await test1.addProductToCart()
    await test1.PaidShippingThreshold()
    await test1.searchProduct("Shoe")
    await test1.addProductToCart()
    await test1.FreeShippingThreshold()
    
});