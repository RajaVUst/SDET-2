    import {Page} from "@playwright/test"
    
    export class CheckoutPage
    {
        constructor(public readonly page:Page)
        {
        }
    
    
        async checkout(name:string,email:string,phone:string,street:string,city:string,zip:string,state:string,country:string)
        {
           await this.page.getByRole('button',{name:/Guest Checkout/}).click()

           await this.page.getByRole('textbox',{name:/Jane/}).fill(name)
           await this.page.getByRole('textbox',{name:/jane@example/}).fill(email)
           await this.page.getByRole('textbox',{name:/555/}).fill(phone)

           await this.page.getByRole('textbox',{name:/Main Street/}).fill(street)
           await this.page.getByRole('textbox',{name:/Spring/}).fill(city)
           await this.page.getByRole('textbox',{name:/62701/}).fill(zip)
            
           await this.page.locator('[data-testid="shipping-state-select"]').selectOption(state)
           await this.page.locator('[data-testid="shipping-country-input"]').fill(country)
            
           await Promise.all([this.page.waitForURL(/payment/, { timeout: 15000 }),this.page.getByRole('button', { name: /Continue to/ }).click()]);


        
           
           
        }
    
    }   