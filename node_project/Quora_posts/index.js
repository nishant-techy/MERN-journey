const express = require("express");
const app = express();
const port = 8080;
// new lines to remember
const path = require("path");

// new lines to remember

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
// app.set("views", path.join(__dirname, "views"));

// old code (already remembered)
app.listen(port, () => {
  console.log(`Listening to the port: ${port}`);
});

app.get("/", (req, res) => {
  res.render("page1.ejs");
});
