
let lift = document.getElementById("lift");
let keyFrames = document.createElement("style");

let floor = document.getElementById("floor");
let main = document.getElementById("main") 

// let height = 0
let from = 0 
let to = 400

function call() {
    
    console.log("Called")

    let maintop = main.offsetHeight
    console.log(maintop)
    
    let currentfloor = floor.offsetTop
    console.log(currentfloor)

    let top = maintop - currentfloor;
    console.log(top)

    
    keyFrames.innerHTML = `@keyframes move{
    0%{top: ${from}px;}
    100%{top: ${to}px`;

    lift.appendChild(keyFrames)
    
}