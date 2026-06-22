const express = require("express");
const app = express();

let port = 8080;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(port, () => {
  console.log("We're listening to your request at the port: ", port);
});

//we should listen the request coming from the user side, so, use the listen
/* app.use is the middleware, not for starting the server (app.use will use to do muliple things at once - 
So app.use() is mostly used for:
(
✅ Middleware
✅ Parsing JSON
✅ Parsing forms
✅ Serving static files
✅ Mounting routers
✅ Running code before routes
)
*/
// and app.get use for telling the exact destination, the exact route

// another new thing, the res.send should only be once, and do not use it again otherwise it'll throw the error.
app.get("/", (req, res) => {
  let data = {
    name: "shaan",
    url: "https://nishantmade.netlify.app/css/image/color%20adjust%20Black%20background%20standing%20image.jpg",
    age: 23,
    project_link: [
      "https://nishantstudio.netlify.app/",
      "https://zerotracee.netlify.app/",
      "https://expense-tracker-web-ap.web.app/",
      "https://expense-tracker-web-ap.web.app/",
      "https://techmesh-labs.xo.je/",
      "https://encrypt-password-create.web.app/",
      "https://searches.netlify.app/",
    ],
    project_img: [
      "https://nishantmade.netlify.app/images/project/ubuntu-portfolio-project.png",
      "https://nishantmade.netlify.app/images/project/gif/encrypting_decrypting_website.gif",
      "https://nishantmade.netlify.app/images/project/gif/expense-tracker-website.gif",
      "https://nishantmade.netlify.app/images/project/to-do-list.webp",
      "https://nishantmade.netlify.app/images/project/gif/techmesh-labs.gif",
      "https://nishantmade.netlify.app/images/project/gif/secure-password-generator.gif",
      "https://nishantmade.netlify.app/images/project/great-search-engines.png",
    ],
    project_name: [
      "Ubuntu inspired Portfolio",
      "Encrypting Decrypting (Zerotrace)",
      "Expense Tracker website",
      "To-do daily task",
      "TechMesh labs",
      "Secure Password Generator",
      "Search Engine website",
    ],
  };
  res.render("page_1.ejs", { data });
});

// app.get("/", (req, res) => {
//   // res.send("Request recieved"); // response send
//   res.send("<h1>Request recieved with bold letters.</h1>");
// });
