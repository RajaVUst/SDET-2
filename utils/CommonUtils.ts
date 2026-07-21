export class CommonUtils {

    static randomEmail() {

        return `user${Date.now()}@test.com`;

    }

    static randomPhone() {

        return "9" + Math.floor(100000000 + Math.random() * 900000000);

    }

}