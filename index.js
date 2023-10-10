const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect('mongodb+srv://Verman:Verman@cluster0.pvgwfhv.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.get('/', (req,res) => {
    res.render("home");
})

app.listen(7000, () => {
    console.log("hello");
})