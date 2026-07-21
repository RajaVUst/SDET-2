import {Page} from '@playwright/test'
export class CheckoutPage
{
    constructor (public readonly page:Page)
    {

    }
    async enterPaymentDetails(name:string,email:string,ph:string,st:string,city:string,pin:string)
    {
            await this.page.getByTestId('guest-name-input').fill(name);
  -         await this.page.getByTestId('guest-email-input').fill(email);
            await this.page.getByTestId('guest-phone-input').fill(ph);
            await this.page.getByTestId('shipping-street-input').fill(st);
            await this.page.getByTestId('shipping-city-input').fill(city);
            await this.page.getByTestId('shipping-state-select').selectOption('GA');
            await this.page.getByTestId('shipping-zip-input').fill(pin);
            await this.page.getByTestId('continue-to-payment-button').click();
          


    }
    async payment()
    {
        await this.page.getByRole("button",{name:"Continue to Payment"})
    }
}