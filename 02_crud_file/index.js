const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const db = require("./db.json");

const app = express();
app.use(bodyParser.urlencoded({ extended: false, limit: "5mb" }));
app.use(bodyParser.json({ limit: "5mb", extended: true }));
const port = 3000;

// all db
app.get("/fortunes", (req, res) => res.json(db));

// get random by id
app.get("/fortunes/random", (req, res) => {
  const random = Math.floor(Math.random() * db.length);
  res.json(db[random]);
});

// get particular by id
app.get("/fortunes/:id", (req, res) => {
  const theItem = db.find(item => item.id == req.params.id);
  res.json(theItem);
});

// create new item in db
app.post("/fortunes", (req, res) => {
  const { message, number, animal } = req.body;
  const idArr = db.map(item => item.id);
  const id = idArr.length > 0 ? Math.max(...idArr) + 1 : 1;
  db.push({ id, message, number, animal });
  fs.writeFile("./db.json", JSON.stringify(db));
  res.json({ id, message, number, animal });
});

// update item in db
app.post("/fortunes/:id", (req, res) => {
  const { message, number, animal } = req.body;
  const theItem = db.find(item => item.id == req.params.id);

  if (message) theItem.message = message;
  if (number) theItem.number = number;
  if (animal) theItem.animal = animal;

  const updated = db.find(item => item.id == req.params.id);
  fs.writeFile("./db.json", JSON.stringify(db));
  res.json(updated);
});

// delete item from db by id
app.delete("/fortunes/:id", (req, res) => {
  const newDb = db.filter(item => item.id != req.params.id);
  fs.writeFile("./db.json", JSON.stringify(newDb));
  res.json(newDb);
});

app.listen(port, () => console.log("server run"));
