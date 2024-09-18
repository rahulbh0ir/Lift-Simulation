
let lift = document.getElementById("lift");
let main = document.getElementById("main");
let keyFrames = document.createElement("style");
let options = document.getElementById("option");

let from = 0
let calledFloor = 0
let current = 0
let sec = 0

function go() {
    document.get
    let inputFloors = document.getElementById("input1").value;
    let inputLifts = document.getElementById("input2").value;

    options.style.display = 'none';

    console.log("GO")

    Floorvalue = Number(inputFloors)
    Liftvalue = Number(inputLifts)


    for (i = 0; i < Floorvalue; i++) {

        let k = Floorvalue - i

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
                <div id="ground">
                </div>

            </div>
            <div id="info">
                <hr>
                <p>Ground</p>
            </div>
        </div>`;

 

    document.getElementById("main").appendChild(add);
    for (j = 0; j < Liftvalue; j++) {
        
        let l = j;
        
        const addlift = document.createElement('div');
        addlift.innerHTML =
            `<div class="lift" id="${l}">
             </div>`;

        addlift.style.marginLeft = "40px";
        document.getElementById("ground").appendChild(addlift)
    }


}



function call(element) {

    var height = main.offsetHeight;
    console.log(height)

    var parent = element.parentNode.parentNode.parentNode;

    calledFloor = parent.offsetTop - height + 160;
    console.log(calledFloor)

    sec = calledFloor - sec
    let secx = Math.abs(sec) / 100



    //Animation----

    // console.log(calledFloor)
    console.log(secx)

    document.getElementById("0").style.marginTop = `${calledFloor}px`;
    document.getElementById("0").style.transitionDuration = `${secx}s`;


    sec = calledFloor
}
