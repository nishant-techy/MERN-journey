const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log("We're listening to your request at the port: ", port);
});

//we should listen the request coming from the user side, so, use the listen
// app.use is the middleware, not for starting the server.
// and app.get use for telling the exact destination, the exact route

app.get("/", (req, res) => {
  res.send("Request recieved"); // response send this and this
});
