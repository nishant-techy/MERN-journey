// Js - part 12

let url = "https://world.openfoodfacts.org/api/v0/product/737628064502.json";

async function access() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
}

access();
