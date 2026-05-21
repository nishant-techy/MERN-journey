// first property
let para = document.createElement("p");
para.innerHTML = "Hey, I'm red";
para.style.color = "red";
let h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", para);

// second property
let h3 = document.createElement("h3");
h3.style.color = "blue";
h3.innerHTML = "I'm blue h3";
para.append(h3);

// third property
let div = document.createElement("div");
div.style.borderColor = "black";
div.style.backgroundColor = "pink";
let heading = document.createElement("h1");
let pp = document.createElement("p");
heading.innerHTML = "I'm in a div";
pp.innerHTML = "ME TOO!";
h3.insertAdjacentElement("afterend", div); // jo bhi element bnaya h usko append krna sabse important h
div.appendChild(heading);
div.appendChild(pp);

// Assignment Questions
// 1st question
let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me!";
// let's make something global which really helps us, everytime we want to use it
let body = document.querySelector("body");
document.querySelector("body").append(input);
document.querySelector("body").append(btn);

// 2nd question
input.id = "InputText";
input.placeholder = "username";
btn.id = "btn";

// 3rd question
document.querySelector("#btn").style.backgroundColor = "blue";
document.querySelector("#btn").style.color = "white";

// 4th question
let headingg = document.createElement("h1");
headingg.innerText = "DOM Practice";
headingg.style.color = "purple";
headingg.style.textDecoration = "underlined";
body.insertAdjacentElement("beforeend", headingg);

// 5th question
let pTag = document.createElement("p");
pTag.innerHTML = "Apna College <b>Delta</b> Practice";
body.appendChild(pTag);
