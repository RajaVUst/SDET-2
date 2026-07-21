import dotenv from 'dotenv';

dotenv.config();

export class Data {

    static readonly baseUrl = process.env.BASEURL!

     static readonly name = process.env.NAME!

    static readonly email = process.env.EMAIL!

    static readonly phone = process.env.PHONE!

    static readonly card = process.env.CARD!

    static readonly expiry = process.env.EXPIRY!

    static readonly cvv = process.env.CVV!


}