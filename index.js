
let lift = document.getElementById("lift");
let main = document.getElementById("main");
let keyFrames = document.createElement("style");

let from = 0
let calledFloor = 0
let current = 0


function go() {

    // location.href = "main.html";

    let input = document.getElementById("input").value;


    // console.log("go")

    inputVaule = Number(input)
    // console.log(inputVaule)


    for (i = 0; i < inputVaule; i++) {

        let k = inputVaule - i

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
                <p>Floor ${k}</p>
            </div>
        </div>`;

        document.getElementById("main").appendChild(add);

    }

    const add = document.createElement('div');
    add.innerHTML =

        ` <div id="floor">
            <div id="content">
                <div id="btn">
                    <button id="up" onclick=call(this)>Up</button>
                </div>
                <div id="lift">
                </div>
            </div>
            <div id="info">
                <hr>
                <p>Ground</p>
            </div>
        </div>`;

    document.getElementById("main").appendChild(add);


}



function call(element) {

    var height = main.offsetHeight;

    var parent = element.parentNode.parentNode.parentNode;

    calledFloor = parent.offsetTop - height


    //Animation----

    console.log(calledFloor)
    document.getElementById("lift").style.marginTop = `${calledFloor}px`;

    
}
