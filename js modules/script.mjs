import { sum } from "./sum.mjs";

let log = console.log;
console.log("1234");
document.body.backgroundColor = "pink";
let div = document.createElement("div");
div.innerHTML = "hello world";
document.querySelector("body").appendChild(div);

log(sum(1, 4));
