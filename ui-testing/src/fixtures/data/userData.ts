import { secrets } from "../../utils/secrets";

export const alice = {
    name: "Alice",
    card_number: secrets.get('ALICE_CARD_NUMBER'),
    card_expiry: secrets.get('ALICE_CARD_EXPIRY'),
    card_cvv: secrets.get('ALICE_CARD_CVV')
}