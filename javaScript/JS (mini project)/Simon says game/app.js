// simon says game

let textChange = document.querySelector("p");
let allBoxes = document.querySelectorAll(".boxes");
let firstBox = document.querySelector("#red");
let secondBox = document.querySelector("#aqua");
let thirdBox = document.querySelector("#yellow");
let fourthBox = document.querySelector("#blue");

let randomGeneratedArr = [];
let userInputArr = [];
function boxGlitter() {
  let randomBoxChosen = Math.floor(Math.random() * 4 + 1);
  if (randomBoxChosen == 1) {
    firstBox.style.opacity = 0.6;
    setTimeout(() => {
      firstBox.style.opacity = 1;
    }, 300);
  } else if (randomBoxChosen == 2) {
    secondBox.style.opacity = 0.6;
    setTimeout(() => {
      secondBox.style.opacity = 1;
    }, 300);
  } else if (randomBoxChosen == 3) {
    thirdBox.style.opacity = 0.6;
    setTimeout(() => {
      thirdBox.style.opacity = 1;
    }, 300);
  } else {
    fourthBox.style.opacity = 0.6;
    setTimeout(() => {
      fourthBox.style.opacity = 1;
    }, 300);
  }
  randomGeneratedArr.push(randomBoxChosen);
  return randomBoxChosen;
}

let level = 0;
document.addEventListener("keydown", function () {
  if (level === 0) {
    // Goal for this event: btn flash + level 1
    // puree document ya window me keydown krne se ek function chalu hoga
    console.log("key pressed, let's start the game");
    textChange.innerText = "Level 1";
    //   we don't care what key is pressed, just game doesn't stop, it should keep going, so, if we do not pass event as an argument, it's fine
    let randomNo = boxGlitter();
    level = 1;
    console.log("level:", level);
    console.log("random number is ", randomNo);
  }
  //   time to check the user click
  firstBox.addEventListener("click", function () {
    userInputArr.push(1);
  });
  secondBox.addEventListener("click", function () {
    userInputArr.push(2);
  });
  thirdBox.addEventListener("click", function () {
    userInputArr.push(3);
  });
  fourthBox.addEventListener("click", function () {
    userInputArr.push(4);
  });
});
