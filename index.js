
let lift = document.getElementById("lift");
let keyFrames = document.createElement("style");

let floor = document.getElementById("floor");

let from = 0 
let to = 200

function call() {
    
    console.log("Called")

    let top = floor.offsetTop;
    console.log(top)

    
    keyFrames.innerHTML = `@keyframes move{
    0%{top: ${from}px;}
    100%{top: ${to}px`;

    lift.appendChild(keyFrames)
    
}