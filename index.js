
let lift = document.getElementById("lift");

let keyFrames = document.createElement("style");
// let input = document.getElementById("input").value;

// let from = 0
// let called = 0
let current = 0

function go() {

    // location.href = "main.html";
    let input = document.getElementById("input").value;


    console.log("go")
    inputVaule = Number(input)
    console.log(inputVaule)


    for (i = 0; i < inputVaule; i++) {

        console.log(i)
        const add = document.createElement('div');
        add.innerHTML =

            ` <div id="floor">
            <div id="content">
                <div id="btn">
                    <button id="up" onclick=call(this)>Up</button>
                    <button id="down" onclick=call(this)>Down</button>
                </div>
            </div>
            <div id="info">
                <hr>
                <p>Floor ${i}</p>
            </div>
        </div>`;

        document.getElementById("main").appendChild(add);

    }
}



function call(element) {

    console.log("Clicked")
    let from = 0
    let called = 0

    var parent = element.parentNode;
    var x = parent.parentNode
    current = x.parentNode


    called = current.offsetTop - 200
    console.log(called)


    //Animation----
    var keyFrames = document.createElement("style")
    // keyFrames.textContent = styles

    keyFrames.innerHTML = `@keyframes move{
    0%{top: ${from}px;}
    100%{top: ${called}px`;

    document.head.appendChild(keyFrames)

    from = called

    console.log(from)
    console.log(called)


}