import {Page,expect} from "@playwright/test"
import{HomePage} from "../pages/HomePage"
import{ProductPage} from "../pages/ProductPage"

export class Scenario1
{
    readonly homepage: HomePage
    readonly productpage: ProductPage

    constructor(public readonly page:Page)
    {
        this.homepage=new HomePage(page)
        this.productpage=new ProductPage(page)

    }

    async search(query:string)
    {
        await this.homepage.Home()
        await expect((this.page)).toHaveURL(/chess-agent-83252463.figma.site/)
        await expect(this.page.getByRole('heading',{name:/RetailMart/,level:1}))
        await expect(this.page.getByRole('button',{name:/Search/})).toBeVisible()

        await this.homepage.searchFor(query)
    }

    async filter(query:string)
    {
         await expect((this.page)).toHaveURL("/?search=laptop")
         await expect(this.page.getByRole('heading',{name:/2/,level:2}))

         await expect(this.page.getByRole('link',{name:/ThinSlate 15/}))
         await expect(this.page.getByRole('link',{name:/QuickCharge/}))

        await this.productpage.PriceFilter(query)
         await expect(this.page.getByRole('img',{name:/ThinSlate 15/}))
        await expect(this.page.getByRole('link',{name:/ThinSlate 15/}))
        await expect(this.page.getByRole('heading',{name:/1/,level:2}))
        await expect(this.page.locator('[value="laptop"]')).toBeVisible()
    }


}