// Js - part 12

let url =
  "https://corsproxy.io/?https://www.reddit.com/r/Wallstreetbets/top.json";

async function access() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
}

access();
