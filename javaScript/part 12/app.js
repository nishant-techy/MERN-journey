// Js - part 12

let url = "https://www.reddit.com/r/Wallstreetbets/top.json";

async function access() {
  let res = await fetch(url);
  let data = res.json();
  console.log(data);
}

access();
