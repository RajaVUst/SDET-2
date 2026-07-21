import { expect,Page,Locator } from "@playwright/test";
import{HomePage} from "../pages/HomePage"
import {ProductPage} from "../pages/ProductPage"
import {CheckoutPage} from "../pages/CheckoutPage"
import {CartPage} from "../pages/CartPage"
export class PaymentFailFlow {

    private readonly homePage: HomePage;
    private readonly productPage :ProductPage;
    private readonly cartPage:CartPage;
    private readonly checkoutPage:CheckoutPage


    constructor(private readonly page: Page) 
    {

        this.homePage = new HomePage(page);
        this.productPage= new ProductPage(page);
        this.cartPage=new CartPage(page);
        this.checkoutPage=new CheckoutPage(page)

    }

    async searchProduct(productName:string) {

        await this.homePage.openHomePage()
        await this.homePage.search(productName);


    }
     async addProductToCart() {

        await this.productPage.showproduct();
        await this.productPage.AddtoCart();
        await this.productPage.toCart();


    }
    async gotoCheckoutPage()
    {
        await this.cartPage.checkout()
    }
    
    async filldetails(name:string,email:string,ph:string,add:string,city:string,pin:string)
    {
        this.checkoutPage.enterPaymentDetails(name,email,ph,add,city,pin)
        this.checkoutPage.payment()
    }
    
   

}

