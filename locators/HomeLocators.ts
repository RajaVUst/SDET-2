export class HomeLocators {

    static readonly HEADER = "header";

    static readonly SEARCH_INPUT = "search-input";

    static readonly SEARCH_BUTTON = "search-button";

    static readonly CART_COUNT = "cart-count";

    static readonly CART_LINK = "cart-link";

    static readonly PRODUCT_CARD = (id: string) =>
        `product-card-${id}`;

    static readonly ADD_TO_CART = (id: string) =>
        `add-to-cart-${id}`;

}