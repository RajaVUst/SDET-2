import {Page,Locator} from "@playwright/test"
export class CartPage
{
    constructor(public readonly page:Page)
    {

    }
        private orderSummary = () : Locator =>  this.page.getByTestId('order-summary');
        private shippingStatus =(): Locator =>  this.page.getByTestId('cart-shipping');
        private checkoutButton =(): Locator =>  this.page.getByRole("button",{name:"Proceed to Checkout"})

    
    async checkout()
    {
        this.checkoutButton().click();

    }
    async checkOrderSummaryVisible()
    {
            return this.orderSummary();
    }
    async checkStatus()
    {
        return this.shippingStatus();
    }

}
