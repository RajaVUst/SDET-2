import {Page} from "@playwright/test"

export class PdpPage
{
    constructor(public readonly page:Page)
    {
    }


    async cart()
    {
       await this.page.getByRole('button',{name:/Add to Cart/}).click()
       await this.page.getByRole('button',{name:/Buy Now/}).click()
    }

}