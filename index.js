const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://Verman:Verman@cluster0.pvgwfhv.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/1", async (req, res) => {
  try {
    const entry = await list.find();
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/", async (req, res) => {
  const entry = new list({
    name: req.body.taskValue,
  });
  entry.save().then((result) => {
    res.redirect("/");
  });
});

app.route("/remove/:id").get((req, res) => {
  const id = req.params.id;
  TodoTask.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/");
  });
});

app.listen(7000, () => {
  console.log("hello");
});
