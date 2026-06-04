// Js - part 12

let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

async function access() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.setup);
  console.log(data.delivery);
}

access();
