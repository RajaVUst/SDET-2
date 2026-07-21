import {Page,expect} from "@playwright/test"
import{HomePage} from "../pages/HomePage"
import{ProductPage} from "../pages/ProductPage"
import{PdpPage} from "../pages/PdpPage"
import{CartPage} from "../pages/CartPage"
import{CheckoutPage} from "../pages/CheckoutPage"
import{PaymentPage} from "../pages/PaymentPage"

export class Scenario2
{
    readonly homepage: HomePage
    readonly productpage: ProductPage
    readonly pdppage: PdpPage
    readonly cartpage: CartPage
    readonly checkoutpage: CheckoutPage
    readonly paymentpage: PaymentPage

    constructor(public readonly page:Page)
    {
        this.homepage=new HomePage(page)
        this.productpage=new ProductPage(page)

        this.pdppage=new PdpPage(page)
        this.cartpage=new CartPage(page)

        this.checkoutpage=new CheckoutPage(page)
        this.paymentpage=new PaymentPage(page)
        
    }

     async selectProduct()
    {
        await expect((this.page)).toHaveURL("/?search=laptop")
        await expect(this.page.locator('[data-testid="product-name-prod-002"]'))
        
         await this.productpage.product()
    }

    async addToCart()
    {
         await expect((this.page)).toHaveURL(/product/)
        await expect(this.page.getByRole('heading',{name:/ThinSlate/})).toBeVisible()
        await expect(this.page.getByText(/849/)).toBeVisible()
        

         await this.pdppage.cart()
    }

    async ProceedToCheckout()
    {
         await expect((this.page)).toHaveURL(/cart/)
        await expect(this.page.getByRole('heading',{name:/Cart/})).toBeVisible()
        await expect(this.page.getByRole('img',{name:/ThinSlate/})).toBeVisible()
        await expect(this.page.getByRole('link',{name:/ThinSlate/}))
        await expect(this.page.getByText(/849/)).toBeVisible()
        

         await this.cartpage.cart()
         
    }

    async checkoutDetails(name:string,email:string,phone:string,street:string,city:string,zip:string,state:string,country:string)
    {
         await expect((this.page)).toHaveURL("/checkout")
         await expect(this.page.getByRole('heading',{name:/Checkout/})).toBeVisible()

         await this.checkoutpage.checkout(name,email,phone,street,city,zip,state,country)
    }   

    async checkPayment(name:string,card:string,expiry:string,cvv:string)
    {
         await expect((this.page)).toHaveURL(/payment/)
         await expect(this.page.getByRole('heading',{name:/Secure Payment/,level:2})).toBeVisible()

         await this.paymentpage.failure(name,card,expiry,cvv)
        await expect(this.page.locator("[data-testid='payment-general-error']")).toHaveText(/Payment processing error/)
        await this.page.getByRole('button',{name:/Place Order/}).click()
        await expect(this.page.locator("[data-testid='payment-general-error']")).toHaveText(/Payment processing error/)


    }   










}