const express = require("express");
const app = express();

let port = 8080;

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
  res.render("./portfolio/page_1.ejs");
});

// app.get("/", (req, res) => {
//   // res.send("Request recieved"); // response send
//   res.send("<h1>Request recieved with bold letters.</h1>");
// });
