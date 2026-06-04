// Js - part 12

let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

let listParent = document.querySelector("ul");
async function access() {
  let res = await fetch(url);
  let data = await res.json();

  let list = document.createElement("li");
  list.innerHTML = `<b> ${data.setup} - ${data.delivery}`;
  listParent.appendChild(list);
}

access();
