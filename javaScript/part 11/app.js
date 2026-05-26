// javascript (part - 11)

let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.fontSize = "80px";
document.querySelector("body").style.backgroundColor = "black";

function changeColor(color, delay, nextColorFunction) {
  setTimeout(() => {
    h1.style.color = color;
    nextColorFunction();
  }, delay);
}
// callback nesting (= callback hell)
changeColor("silver", 1000, () => {
  changeColor("purple", 1000, () => {
    changeColor("grey", 1000, () => {
      changeColor("yellow", 1000, () => {
        console.log("done");
      });
    });
  });
});

// it can be one way, but the thing is we cannot do things like that especially when we have better way to do such things
//   so, what we gonna use, we name it "callback hell", the thing you can see above of this line
/*

function yellow() {
    h1.style.color = "yellow";
  }
function changeColor() {
  setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "black";
  }, 1000);
  setTimeout(() => {
    h1.style.color = "silver";
  }, 1500);
  setTimeout(() => {
    h1.style.color = "purple";
  }, 3000);
  setTimeout(() => {
    h1.style.color = "grey";
  }, 4000);
  setTimeout(() => {
    yellow();
    }, 5000);
}

changeColor();
*/
