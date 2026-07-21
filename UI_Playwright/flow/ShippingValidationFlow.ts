import { expect,Page,Locator } from "@playwright/test";
import{HomePage} from "../pages/HomePage"
import {ProductPage} from "../pages/ProductPage"
import {CartPage} from "../pages/CartPage"
export class ShippingValidationFlow {

    private readonly homePage: HomePage;
    private readonly productPage :ProductPage;
    private readonly cartPage:CartPage;

    constructor(private readonly page: Page) 
    {

        this.homePage = new HomePage(page);
        this.productPage= new ProductPage(page);
        this.cartPage=new CartPage(page);
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
    async PaidShippingThreshold()
    {
        await expect (this.page.getByTestId('order-summary')).toBeVisible;
        await expect(this.page.getByTestId('cart-shipping')).toContainText("$")

    }
    async FreeShippingThreshold()
    {
        await expect (this.page.getByTestId('order-summary')).toBeVisible;
        await expect(this.page.getByTestId('cart-shipping')).toContainText("FREE")

    }

}

