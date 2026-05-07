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
