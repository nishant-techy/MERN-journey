let btn = document.querySelector("#add_task");
let input = document.querySelector("#input");
let ul = document.querySelector("ul");
let del = document.querySelector(".delete");

// working perfectly fine, no issue just trying the new approach
/*
            btn.addEventListener("click", function () {
              let list = document.querySelectorAll("li"); // if i do not put that here, it'll take the elements from the beginning and never updated again, so, we have to select all of the elements each time
              input.value = input.value.toLowerCase();
              let str = "";
              for (let li of list) {
                str += li.innerText.toLowerCase() + " ";
                alert(str);
              }
              let found = false;
              if (!str.includes(input.value)) {
                let addMe = document.createElement("li");
                addMe.innerText = input.value;
                ul.insertAdjacentElement("beforeend", addMe);
                //   input.value = "";
              } else {
                alert("task already present in the list");
              }
            });

      */

btn.addEventListener("click", function () {
  let list = document.querySelectorAll("li"); // if i do not put that here, it'll take the elements from the beginning and never updated again, so, we have to select all of the elements each time
  input.value = input.value.toLowerCase();
  let found = false;
  for (let i = 0; i < list.length; i++) {
    if (
      input.value.trim() === list[i].innerText.trim().toLowerCase() ||
      input.value.trim() === ""
    ) {
      // if they match means the item is present in the list, right?
      found = true; // if found then don't add it (makes sense, right)
      alert("Task already present in the list");
      break;
    } else {
      console.log("Not found, adding it...");
    }
  }

  if (!found) {
    // insert list items
    let addMe = document.createElement("li");
    addMe.innerText = input.value;
    ul.appendChild(addMe);
    input.value = "";

    // insert button
    let strikeBtn = document.createElement("button");
    addMe.appendChild(strikeBtn);
    strikeBtn.innerText = "Completed";
    strikeBtn.classList.add("completed");

    // insert another button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    strikeBtn.insertAdjacentElement("afterend", delBtn);
  } else {
    console.log("task already present in the list");
  }
  console.log("end");
});

// let strikeThroughBtn = document.querySelectorAll(".completed");
// for (let strikeBtns of strikeThroughBtn) {
//   strikeBtns.addEventListener("click", function () {
//     this.parentElement.classList.toggle("done");
//     if (this.parentElement.classList.contains("done")) {
//       this.innerText = "Undo";
//     } else {
//       this.innerText = "Completed";
//     }
//   });
// }

// event delegation method
ul.addEventListener("click", function (event) {
  console.log(event.target);
  console.dir(event.target);
  if (
    event.target.nodeName === "BUTTON" &&
    event.target.classList.contains("delete")
  ) {
    event.target.parentElement.remove();
  } else if (
    event.target.nodeName === "BUTTON" &&
    event.target.classList.contains("completed")
  ) {
    console.log("acha krya");
    let li = event.target.parentElement;
    li.classList.toggle("done");
    if (li.classList.contains("done")) {
      event.target.innerText = "Undo";
    } else {
      event.target.innerText = "Completed";
    }
  } else {
    console.log("you pressed wrong");
  }
});
