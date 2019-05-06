// based on series at https://www.robinwieruch.de/minimal-node-js-babel-setup/
// and https://www.robinwieruch.de/node-js-express-tutorial/

//TO look at: Properties files in node and things like config.json
// Loading JSON from a file
// Look at log4js basics


import "dotenv/config";
import cors from 'cors';
import express from "express";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("Test key is: " + process.env.MY_API_KEY);
});

app.listen(process.env.PORT, () =>
  console.log("Example app using Express listening on port " + process.env.PORT)
);

console.log("New node.js project using nodemon and babel");
console.log(process.env.MY_API_KEY);
