export class Logger {

    static step(message: string) {
        console.log(`STEP : ${message}`);
    }

    static info(message: string) {
        console.log(`INFO : ${message}`);
    }

    static pass(message: string) {
        console.log(`PASS : ${message}`);
    }

    static fail(message: string) {
        console.log(`FAIL : ${message}`);
    }

}