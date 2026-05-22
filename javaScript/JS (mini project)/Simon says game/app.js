// simon says game

let textChange = document.querySelector("p");
let allBoxes = document.querySelectorAll(".boxes");
let firstBox = document.querySelector("#red");
let secondBox = document.querySelector("#aqua");
let thirdBox = document.querySelector("#yellow");
let fourthBox = document.querySelector("#blue");

let gameSequence = [];
let userSequence = [];
let level = 0;

function boxNumberGeneration() {
  let randomBoxChosen = Math.floor(Math.random() * 4 + 1);
  return randomBoxChosen;
}

function boxGlitter(randomBoxChosen) {
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
}

function checkBothSequence() {
  for (let i = 0; i < gameSequence.length; i++) {
    if (userSequence[i] === gameSequence[i]) {
      console.log("userSequence: ", userSequence);
      console.log("matched");
      level++;
      console.log("level:", level, "begins");
      textChange.innerHTML = `Level ${level}`;
      userSequence = [];
      levelIncremented();
    } else {
      console.log("Not matched");

      //       console.log("not matched");
      //       document.body.style.backgroundColor = "red";
      //       setTimeout(() => {
      //         document.body.style.backgroundColor = "black";
      //       }, 100);
      //       setTimeout(() => {
      //         window.location.reload();
      //       }, 300);
      console.log("You loose");
    }
  }
}

document.addEventListener("keydown", function () {
  if (level === 0) {
    let randomBoxChosen = boxNumberGeneration();
    textChange.innerText = "Level 1";
    // let randomBoxChosen = Math.floor(Math.random() * 4 + 1);
    console.log("choosen box is: ", randomBoxChosen);
    gameSequence.push(randomBoxChosen);
    boxGlitter(randomBoxChosen); // calling the function with passing the argument, so, it would work perfectly fine
    console.log("gameSequence: ", gameSequence);
    level = 1;
  }
  if (level === 1) {
    // time to check the user click
    firstBox.addEventListener("click", function () {
      userSequence.push(1);
      checkBothSequence();
    });
    secondBox.addEventListener("click", function () {
      userSequence.push(2);
      checkBothSequence();
    });
    thirdBox.addEventListener("click", function () {
      userSequence.push(3);
      checkBothSequence();
    });
    fourthBox.addEventListener("click", function () {
      userSequence.push(4);
      checkBothSequence();
    });
  }
});

function levelIncremented() {
  if (level > 1) {
    let randomBoxChosen = boxNumberGeneration();
    console.log(`New Choosen box for level ${level} is: `, randomBoxChosen);
    boxGlitter(randomBoxChosen); // calling the function with passing the argument, so, it would work perfectly fine
    gameSequence.push(randomBoxChosen);
    console.log("new gameSequence: ", gameSequence);
    for (let j = 0; j < gameSequence.length; j++) {
      boxGlitter(gameSequence[j]);
    }
  }
}

/*
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
  gameSequence.push(randomBoxChosen);
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
});

// function matching() {
//   for (let i = 0; i < gameSequence.length; i++) {
//     if (userSequence[i] === gameSequence[i]) {
//       console.log(gameSequence.length);
//     } else {
//       console.log("not matched");
//       document.body.style.backgroundColor = "red";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "black";
//       }, 100);
//       setTimeout(() => {
//         window.location.reload();
//       }, 300);
//     }
//   }
// }

//   time to check the user click
firstBox.addEventListener("click", function () {
  userSequence.push(1);
  console.log(gameSequence);
  console.log(userSequence);
  if (userSequence[i] === gameSequence[i]) {
    level = 2;
    console.log("Promote to level 2");
    boxGlitter();
  }
});
secondBox.addEventListener("click", function () {
  userSequence.push(2);
  console.log(gameSequence);
  console.log(userSequence);
});
thirdBox.addEventListener("click", function () {
  userSequence.push(3);
  console.log(gameSequence);
  console.log(userSequence);
});
fourthBox.addEventListener("click", function () {
  userSequence.push(4);
  console.log(gameSequence);
  console.log(userSequence);
});

for (let i = 0; i < gameSequence.length; i++) {
  console.log(i);
}


*/
