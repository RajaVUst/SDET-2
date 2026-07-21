import {test} from "../fixture/ShopFixture"
import {Env} from "../utils/Env"
import {User} from "../test-data/user"
test("Payment failure Validation ",async({test2,log,evidence})=>
{
    await test2.searchProduct("Shoe")
    await test2.addProductToCart()
    await test2.gotoCheckoutPage()
    await test2.filldetails(User.Fullname,User.EmailAddress,User.Phone_number,User.StreetAddress,User.City,User.Pincode)

});