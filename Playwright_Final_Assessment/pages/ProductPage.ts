import {Page} from "@playwright/test"

export class ProductPage
{
    constructor(public readonly page:Page)
    {
    }


    async PriceFilter(query:string)
    {
       await this.page.getByRole('button',{name:query}).click()
    }


    async product()
    {
        await this.page.locator('[data-testid="product-name-prod-002"]').click()
    }
}