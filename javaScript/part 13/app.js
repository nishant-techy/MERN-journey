// javaScript (part - 13)
let url = "http://universities.hipolabs.com/search?name=";

let inputField = document.querySelector("input");
let searchBtn = document.querySelector("button");

let listParent = document.querySelector("#result");

searchBtn.addEventListener("click", async () => {
  let passMe = url + inputField.value;
  let resArr = await fetchData(passMe);
  inputField.value = "";
  for (let arr of resArr) {
    let listItem = document.createElement("li");
    listItem.innerText = arr.name + " - " + arr["state-province"];
    listParent.appendChild(listItem);
  }
});

async function fetchData(url) {
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.log("Error:", e);
    return [];
  }
}
