// Js - part 12

let url = "https://cataas.com/doc.html";

async function access() {
  let res = await fetch(url);
  console.log(res);
}

access();
