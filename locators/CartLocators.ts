export class CartLocators {

    static readonly CART_PAGE = "cart-page";

    static readonly CART_HEADING = "cart-heading";

    static readonly ORDER_SUMMARY = "order-summary";

    static readonly CART_SUBTOTAL = "cart-subtotal";

    static readonly CART_TOTAL = "cart-total";

    static readonly CHECKOUT_BUTTON = "checkout-button";

    static readonly CART_ITEM = (id: string) =>
        `cart-item-${id}`;

    static readonly ITEM_NAME = (id: string) =>
        `cart-item-name-${id}`;

    static readonly ITEM_PRICE = (id: string) =>
        `cart-item-price-${id}`;

    static readonly ITEM_QUANTITY = (id: string) =>
        `cart-qty-value-${id}`;

}