const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
var compression = require('compression');

// app.use(compression())
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

//app.get('/', (req, res) => res.send(`<h1>Hello world!</h1>`))
//app.get('/:id', (req, res) => res.send(req.params))

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  fetch("https://www.anapioficeandfire.com/api/houses?pageSize=50")
    .then(res => res.json())
    .then(data =>
      res.render("pages/index", {
        data: data
      })
    )
    .catch(error => console.error("Error:", error));
});

app.get("/:id", function (req, res) {
  const id = req.params.id;

  fetch("https://www.anapioficeandfire.com/api/houses?&name=" + id)
    .then(res => res.json())
    .then(data =>
      res.render("pages/detail", {
        data: data
      })
    )
    .catch(error => console.error("Error:", error));
});

app.post("/search", function (req, res) {
  var item = req.body.userSearchInput;
  console.log(item);

  fetch("https://www.anapioficeandfire.com/api/houses?&name=" + item)
    .then(res => res.json())
    .then(data =>
      res.render("pages/search", {
        data: data
      })
    )
    .catch(error => console.error("Error:", error));
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));