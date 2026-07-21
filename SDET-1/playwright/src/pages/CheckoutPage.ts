import { Page , Locator} from "@playwright/test";
import { expect } from "../fixtures/test.fixture";

export class CheckoutPage {

    constructor(private readonly page: Page) {}

    private checkoutBanner(): Locator{
        return this.page.getByRole("heading", {name: "Checkout", exact:true})
    }

    private guestCheckout():Locator{
        return this.page.getByRole("button", {name: "Guest Checkout"});
    }

    private fullName():Locator{
        return this.page.getByTestId("guest-name-input")
    }

    private emailAddress():Locator{
        return this.page.getByTestId("guest-email-input")
    }

    private phoneNumber():Locator{
        return this.page.getByTestId("guest-phone-input")
    }

    private streetAddress():Locator{
        return this.page.getByTestId("shipping-street-input")
    }

    private city():Locator{
        return this.page.getByTestId("shipping-city-input")
    }

    private state():Locator{
        return this.page.getByTestId("shipping-state-select")
    }

    private zipCode():Locator{
        return this.page.getByTestId("shipping-zip-input")
    }

    private country():Locator{
        return this.page.getByTestId("shipping-country-input")
    }

    private continuePayment(): Locator{
        return this.page.getByRole("button", {name: "Continue to Payment"})
    }

    async verifyCheckoutPage(): Promise<void>{
        await expect(this.checkoutBanner()).toBeVisible();
        await expect(this.continuePayment()).toBeVisible();
    }

    async switchGuest(): Promise<void>{
        await this.guestCheckout().click();
    }

    async fillContactInformation(fullName:string, email:string,phone:string): Promise<void>{
        await this.fullName().fill(fullName)
        await this.emailAddress().fill(email)
        await this.phoneNumber().fill(phone)
    }

    async fillShippingAddress(address:string, city:string, state:string, zip:string, country:string): Promise<void>{
        await this.streetAddress().fill(address);
        await this.city().fill(city);
        await this.state().selectOption(state);
        await this.zipCode().fill(zip);
        await this.country().fill(country);
    }

    async clickPayment(): Promise<void>{
        await this.continuePayment().click()
    }

}