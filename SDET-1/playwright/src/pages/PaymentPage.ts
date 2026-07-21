import { Page , Locator} from "@playwright/test";
import { expect } from "../fixtures/test.fixture";

export class PaymentPage {

    constructor(private readonly page: Page) {}

    private paymentBanner(): Locator{
        return this.page.getByRole("heading", {name: "Payment", exact:true})
    }

    // private guestCheckout():Locator{
    //     return this.page.getByRole("button", {name: "Guest Checkout"});
    // }

    private cardHolder():Locator{
        return this.page.getByTestId("payment-card-name")
    }

    private cardNumber():Locator{
        return this.page.getByTestId("payment-card-number")
    }

    private expiryDate():Locator{
        return this.page.getByTestId("payment-expiry")
    }

    private cvv():Locator{
        return this.page.getByTestId("payment-cvv")
    }

    private placeOrderButton(): Locator{
        return this.page.getByRole("button", {name: "Place Order"})
    }

    private declinedError(): Locator{
        return this.page.getByText("Your card was declined. Please use a different card or contact your bank.")
    }

    private declineAlert():Locator{
        return this.page.getByTestId("payment-general-error")
    }

    async verifyCheckoutPage(): Promise<void>{
        await expect(this.paymentBanner()).toBeVisible();
        await expect(this.placeOrderButton()).toBeVisible();
    }

    async fillCardInformation(name:string, cardNumber:string,expiry:string, cvv:string): Promise<void>{
        await this.cardHolder().fill(name)
        await this.cardNumber().fill(cardNumber)
        await this.expiryDate().fill(expiry)
        await this.cvv().fill(cvv)
    }

    async clickPlaceOrder(): Promise<void>{
        await this.placeOrderButton().click()
    }

    async assertDecline(): Promise<void>{
        await expect(this.declineAlert()).toBeVisible();
        await expect(this.declinedError()).toBeVisible();
        await expect(this.page).toHaveURL(/payment/);
        await expect(this.cardHolder()).not.toBeNull();
    }

}