// based on series at https://www.robinwieruch.de/minimal-node-js-babel-setup/
// and https://www.robinwieruch.de/node-js-express-tutorial/

//TO look at: Properties files in node and things like config.json
// Loading JSON from a file
// Look at log4js basics

import "dotenv/config";
import cors from 'cors';
import express from "express";

import {users, messages} from './users';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  return res.send("Recieved a GET HTTP method");
});

app.post('/', (req, res) => {
  return res.send("Recieved a POST HTTP method");
});

app.put('/', (req, res) => {
    return res.send("Recieved a PUT HTTP method");
});

app.delete('/', (req, res) => {
    return res.send("recieved a DELETE HTTP method");
});

app.get("/test", (req, res) => {
  res.send("Test key is: " + process.env.MY_API_KEY);
});

// Manipulate the USER resource
app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(Object.values(users[req.params.userId]));
})

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`);
});

app.listen(process.env.PORT, () =>
  console.log("Example app using Express listening on port " + process.env.PORT)
);

console.log("New node.js project using nodemon and babel");
console.log(process.env.MY_API_KEY);
