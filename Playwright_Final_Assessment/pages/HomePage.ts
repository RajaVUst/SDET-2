import {Page} from "@playwright/test"

export class HomePage
{
    constructor(public readonly page:Page)
    {
    }


    async Home()
    {
        await this.page.goto("/")
    }

    async searchFor(query:string)
    {
       var search = await this.page.getByRole('textbox',{name:/Search products/})
       search.clear()
       search.fill(query)
       search.press('Enter')
    }

}