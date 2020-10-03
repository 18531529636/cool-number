import Number from "../util/number"
import appendChild from "./appendEle"

let n = new Number();
n.callbackfunc = function (n, isPrime) {
    appendChild(n, isPrime);
}

let isStart = false;

window.onclick = function () {
    if (isStart) {
        n.stop();
        isStart = false;
    } else {
        n.start();
        isStart = true;
    }
}

