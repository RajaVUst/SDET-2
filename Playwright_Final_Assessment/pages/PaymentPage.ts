    import {Page} from "@playwright/test"
    
    export class PaymentPage
    {
        constructor(public readonly page:Page)
        {
        }
    
    
        async failure(name:string,card:string,expiry:string,cvv:string)
        {
           await this.page.locator('[data-testid="payment-scenario-failure"]').click()

           await this.page.getByRole('textbox',{name:/Jane/}).fill(name)
           await this.page.getByRole('textbox',{name:/1234 5678/}).fill(card)
           await this.page.getByRole('textbox',{name:/MM/}).fill(expiry)
           await this.page.locator('[data-testid="payment-cvv"]').fill(cvv)

           await this.page.getByRole('button',{name:/Place Order/}).click()

    
           
        }
    
    }   