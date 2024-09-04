
let lift = document.getElementById("lift");
let keyFrames = document.createElement("style");

let floor = document.getElementById("floor");
let main = document.getElementById("main");


let from = 0 
let to = 0

function call(element) {
    
    console.log("Clicked")
    
    var parent = element.parentNode;
    // console.log(parent.id);
    
    var x = parent.parentNode
    console.log(x)

    var current = x.parentNode
    console.log(current.id)

    let called = current.offsetTop - 40
    console.log(called)

    
    //Animation----
    keyFrames.innerHTML = `@keyframes move{
    0%{top: ${from}px;}
    100%{top: ${called}px`;

    lift.appendChild(keyFrames)

    
    
}