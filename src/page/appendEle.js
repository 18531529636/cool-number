import ranColor, { getRandom } from "../util/ranColor"

let divContainer = document.getElementById("divContainer");
let divCenter = document.getElementById("divCenter");

export default function (n, isPrime) {
    var span = document.createElement("span");
    span.innerText = n;
    if (isPrime) {
        span.style.color = ranColor();
        createCenterNumber(n, ranColor());
    }
    divContainer.appendChild(span);
    createCenter(n);
}


function createCenter(n) {
    divCenter.innerText = n;
}

function createCenterNumber(n, color) {
    var div = document.createElement("div");
    div.className = "center";
    div.style.color = color;
    div.innerText = n;
    document.body.appendChild(div);

    //让页面重新渲染，
    getComputedStyle(div).left;
    div.style.transform = `translate(${getRandom(-200, 200)}px, ${getRandom(-200, 200)}px)`;
    div.style.opacity = 0;

}

