//htpp server setup
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("HOME PAGE");
//   }
//   if (req.url == "/about") {
//     res.end("ABOUT PAGE");
//   }
// });
// server.listen(5000, () => {
//   console.log("server is listening on port 5000");
// });

//events
// const EventEmitter = require("events");
// const customEmitter = new EventEmitter();
// customEmitter.on("response", () => {
//   console.log(`data recieved `);
// });
// customEmitter.on("response", () => {
//   console.log(`some other logic here `);
// // });
// customEmitter.emit("response");
//Using event emitter API
// const http = require("http");
// const server = http.createServer();
// server.on("request", (req, res) => {
//   console.log("Server started");
//   res.end("welcome to my server");
//   ("<h1>Hello</h1>");
// });
// server.listen(3000);

const http = require("node:http");
const fs = require("node:fs");
http
  .createServer((req, res) => {
    try {
      fileStream = fs.createReadStream("./content/big.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
      fileStream.on("error", (err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  })
  .listen(3000);
 
  