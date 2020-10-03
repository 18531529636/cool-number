import isPrime from "./isPrime"

export default class Number {
    constructor(duration = 100) {
        this.duration = duration;
        this.timer = null;
        this.number = 1;
        this.callbackfunc = null;
    }

    start() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.callbackfunc && this.callbackfunc(this.number, isPrime(this.number));
            this.number++;
        }, this.duration);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
}