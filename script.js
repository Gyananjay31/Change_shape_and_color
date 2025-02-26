let rd = document.querySelector(".round");
let btn = document.querySelectorAll("button");
let shape = document.querySelector("#square");


btn[0].addEventListener("click", changeColor);

function getColor(){
    let color = Math.floor(Math.random() * 250);
    return color;
}

function changeColor(){
    let newColor = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
    rd.style.backgroundColor = newColor;
}

btn[1].addEventListener("click", changeShape);
let sp=["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "leftPointer", "rightPinter", "parallal", "random"];

function randomShape(){
    let idx = Math.floor(Math.random() * sp.length);
    return sp[idx];
}

function changeShape(){
    let id = randomShape();
    shape.id = id;
}