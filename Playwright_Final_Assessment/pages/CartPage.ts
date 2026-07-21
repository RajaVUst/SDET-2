    import {Page} from "@playwright/test"
    
    export class CartPage
    {
        constructor(public readonly page:Page)
        {
        }
    
    
        async cart()
        {
           await this.page.getByRole('button',{name:/Proceed/}).click()
           
        }
    
    }