export const APP_CONSTANTS = {
    BASE_URL: process.env.BASE_URL || "https://chess-agent-83252463.figma.site/",
    TIMEOUT: 30000,
    RETRY_COUNT: 3,
};

export const TEST_DATA = {
    VALID_USER: {
        name: "Chaithra Chandran",
        email: "chaithra@ust.com",
        phone: "7890564567",
    },
    SHIPPING_ADDRESS: {
        street: "West coast",
        city: "Chennai",
        state: "IN",
        zipCode: "60002",
        country: "India",
    },
};

export const PRODUCT_IDS = {
    PRODUCT_001: "prod-001",
    PRODUCT_005: "prod-005",
    PRODUCT_006: "prod-006",
};

export const PAYMENT_SECRETS = {
    cardholderName: "Chaithra Chandran",
    cardNumber: process.env.CARD_NUMBER || "",
    expiryDate: process.env.CARD_EXPIRY || "",
    cvv: process.env.CARD_CVV || "",
};
