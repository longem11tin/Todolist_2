var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use("/static", express.static("public"));

app.use(express.urlencoded({extended: true }));

app.set("view engine","ejs");

var todolist = [
  "Wash disk",
  "mlem mlem food in thu duc"
]

app.get('/',(req , res) => {
  res.render('todo.ejs', {todolist:todolist});
  //res.send("<h1> Hello World </h1>");
  //res.send('Use localhost:5000/views/style.css');
});

app.get('*',(req , res) => {
  res.render('todo.ejs');
  //res.send("<h1> Hello World </h1>");
  //res.send('Use localhost:5000/views/style.css');
});

app.listen(5000, () => console.log("Server Up and running"));
