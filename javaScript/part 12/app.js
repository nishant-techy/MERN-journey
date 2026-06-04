// Js - part 12

let url = "https://corsproxy.io/?https://cataas.com/api/cats?limit=10&skip=0";

async function access() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
}

access();
