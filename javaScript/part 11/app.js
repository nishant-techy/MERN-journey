// javascript (part - 11)

/*
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

*/

// let's try to make this one also the help of "promises"

let h1 = document.querySelector("h1");
h1.style.fontSize = "80px";
document.querySelector("body").style.backgroundColor = "black";

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve();
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("Red was applied successfully.");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("Orange was applied successfully.");
    return changeColor("silver", 1000);
  })
  .then(() => {
    console.log("Silver was applied successfully.");
    return changeColor("purple", 1000);
  })
  .then(() => {
    console.log("Purple was applied successfully.");
    return changeColor("grey", 1000);
  })
  .then(() => {
    console.log("Grey was applied successfully.");
    return changeColor("yellow", 1000);
  })
  .catch(() => {
    console.log("Something went wrong");
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

// -------------- the real callback hell looks like ---------------------
// function saveMyData(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10 + 1);
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// when you nested the callback, it became the callback hell

/*
saveMyData(
  "apna system",
  () => {
    console.log("saved: apna system");
    saveMyData(
      "second form of data",
      () => {
        console.log("Saved2: this is the second time we saved it.");
        saveMyData(
          "third form of data",
          () => {
            console.log("saved3: data saved successfully.");
          },
          () => {
            console.log("Failed3: weak connection. data failed to save!");
          },
        );
      },
      () => {
        console.log("Failure2: Weak connection.");
      },
    );
  },
  () => {
    console.log("Weak connection, failed!");
  },
);
*/

// --------------------- Promises starts from here ------------------------
/*

function saveMyData(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);
    console.log(internetSpeed);
    if (internetSpeed > 4) {
      resolve("Data saved successfully");
    } else {
      reject("Weak connection, Aborted!");
    }
  });
}

console.log(saveMyData("Apna system"));

*/

// ------------------ Promise chaining ---------------------
/*
function saveMyData(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);
    if (internetSpeed > 4) {
      resolve("Data has been saved.");
    } else {
      reject("Failed: Weak connection!");
    }
  });
}

// calling the function by promises
saveMyData("Apna system")
  .then(() => {
    console.log("Data1 is saved");
    return saveMyData("Dusra system h apna"); // to isme kya scene h ki ye callback hell ka replacement iss tarike se h ki jo bhi chij ho rhi h wo samjh aa rhi, it's like saveMyData() function ko call kro .then(jo bhi kaam krana h wo krao), phir next function ko saath saath call kro, isme baar baar error message nhi btana pd rha agr kahi situation khrab hogi to apne aap catch() function smbhal lega aur uski tarah isme baar baar function k andr function calling aur conditions nhi deni pd rhi, to isiliye ye kaafi shi format h use krne k liye
  })
  .then(() => {
    console.log("data2 is saved");
    return saveMyData("Teesra system h apna to philhal");
  })
  .then(() => {
    console.log("data3 is saved successfuly");
  })
  .catch(() => {
    console.log("Error happened");
  });

  */
