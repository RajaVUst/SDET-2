import {Page,Locator} from '@playwright/test'
export class HomePage
{
    constructor (public readonly page:Page)
    {

    }
    private searchBox = () : Locator => this.page.getByRole('textbox', { name: 'Search products, brands, categories...' });
    private searchButton = () : Locator => this.page.getByRole('button', { name: 'Search' });

    async openHomePage()
    {
        await this.page.goto(" ")
    }
    
    async search(productname:string)
    {
        await this.searchBox().fill(productname);
        await this.searchButton().click();
    }
}