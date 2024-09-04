
let lift = document.getElementById("lift");
let keyFrames = document.createElement("style");
            
let from = 0 
let called = 0
let current = 0

function call(element) {
    
    console.log("Clicked")
    
    var parent = element.parentNode;
    var x = parent.parentNode
    current = x.parentNode


    called = current.offsetTop - 40
    // console.log(called)

    
    //Animation----
    keyFrames.innerHTML = `@keyframes move{
    0%{top: ${from}px;}
    100%{top: ${called}px`;

    lift.appendChild(keyFrames)

    

    console.log(from)
    console.log(called)

    
}