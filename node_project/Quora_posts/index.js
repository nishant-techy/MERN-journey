const express = require("express");
const app = express();
const port = 8080;
// new lines to remember
const path = require("path"); // Optional if not using path.join()

// new lines to remember
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // Only for forms
app.use(express.static("public")); // Only if serving static files
app.set("views", path.join(__dirname, "views")); // Optional if using default views folder

// old code (already remembered)
app.listen(port, () => {
  console.log(`Listening to the port: ${port}`);
});

app.get("/", (req, res) => {
  res.render("page1.ejs");
});
