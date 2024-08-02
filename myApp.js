let express = require("express");
let app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "Hello json".toUpperCase() });
  } else {
    res.json({ message: "Hello json" });
  }
});
