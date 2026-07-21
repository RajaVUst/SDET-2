export class Config {

    static readonly BASE_URL = process.env.BASE_URL || "http://localhost:3000";

    static readonly BROWSER = process.env.BROWSER || "chromium";

    static readonly TIMEOUT = 30000;

}