var dis = document.querySelector("#display");

dis.style.color = "yellow";
dis.style.fontSize = "40px";

function appendvalue(valueee){ 
    document.getElementById('display').value += valueee; // .value in getelementby().value is builtIn.
}

function clearDisplay(){
    // display.value
    document.getElementById('display').value = "";
}

// var fxn = function(){
//     try{
//         display.value = eval(display.value); // eval() is a built-in JavaScript function that evaluates a string as JavaScript code and executes it.
//     }
//     catch(error){
//         alert("Invalid Expression");
//     }
// }

var calculateResult = function(){
    try{
        document.getElementById('display').value = eval(document.getElementById('display').value); 
        // eval() is a built-in JavaScript function that evaluates a string as JavaScript code and executes it.
    }
    catch(error){
        alert("Invalid Expression");
    }
}

var s = 0;
function appendfront(){
    // if(s==0){
    //     document.getElementById('display').value = '-'+document.getElementById('display').value;
    //     s = 1;
    // }
    // else{ // no need of this commented code.
        let sm = eval(document.getElementById('display').value);
        document.getElementById('display').value = '-' + `( ${sm} )`;
        s = 0;
    // }
}

function upon(){
    let sm = eval(document.getElementById('display').value);
    document.getElementById('display').value = '1/'+ `(${sm})`;
}

function root(){
    let sm = eval(document.getElementById('display').value)
    document.getElementById('display').value = Math.sqrt(sm);
}

function square(){
    let sm = eval(document.getElementById('display').value)
    document.getElementById('display').value = sm*sm;
}

let cont = document.getElementsByClassName('container');
let bod = document.querySelector("body");
let butts = document.getElementsByClassName('items');
let ih = document.getElementById("innerh1");


// let mode = document.getElementsByClassName('mode'); // you cannot eventListener to this.
let mode = document.querySelector('.mode');
let count = 0;

mode.addEventListener("click",()=>{
    if(count===0){
        bod.style.transition = "background-color 1s";
        bod.style.backgroundColor = "white";
        mode.style.transition = "box-shadow 1s";
        mode.style.boxShadow = "3px 3px 40px 10px black";
        ih.innerText = "Dark  Mode"; 
        dis.style.transition = "background-color 1s";
        dis.style.backgroundColor = "rgb(157, 157, 157)";

        count=1;
    }
    else{
        bod.style.transition = "background-color 1s";
        bod.style.backgroundColor = "rgb(48, 48, 48)";
        mode.style.boxShadow = "3px 3px 40px 10px white";
        dis.style.backgroundColor = "rgb(23, 23, 23)";
        ih.innerText = "Light Mode";
        count=0;
    }
});

// extraaa by gpt:
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // If the key is a number or operator, simulate button press
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendvalue(key);
    } else if (key === "Enter" || key === "=") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    }
});

var deleteLast = function(){
    dis.value = (dis.value).slice(0,-1);
}


