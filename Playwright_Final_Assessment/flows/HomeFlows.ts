import {Page,expect} from "@playwright/test"
import{HomePage} from "../pages/HomePage"

export class HomeFlow
{
    readonly homepage: HomePage
    constructor(public readonly page:Page)
    {
        this.homepage=new HomePage(page)
    }

    async search(query:string)
    {
        await this.homepage.Home()
        await expect((this.page)).toHaveURL(/chess-agent-83252463.figma.site/)
        await expect(this.page.getByRole('heading',{name:/RetailMart/,level:1}))
        await expect(this.page.getByRole('button',{name:/Search/})).toBeVisible()

        await this.homepage.searchFor(query)
    }

}