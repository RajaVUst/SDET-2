import {Page,Locator} from '@playwright/test'
export class ProductPage
{
    constructor (public readonly page:Page)
    {

    }
  

    private productImage = () : Locator =>  this.page.locator('[data-testid^="product-card-"]').first();
    private AddtoCartButton = () : Locator => this.page.getByRole('button', { name: 'Add to Cart' });
    private gotoCart=():Locator => this.page.locator('[data-testid="cart-link"]')
    async showproduct()
    {
            await this.productImage().click();
    }
    
    async AddtoCart()
    {
       await this.AddtoCartButton().click();
    }

    async toCart()
    {
        await this.gotoCart().click();
    }


}