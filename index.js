const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.use(express.static("public"));

//app.get('/', (req, res) => res.send(`<h1>Hello world!</h1>`))
//app.get('/:id', (req, res) => res.send(req.params))

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  fetch("https://api.got.show/api/houses/")
    .then(res => res.json())
    .then(data =>
      res.render("pages/index", {
        data: data
      })
    )
    .catch(error => console.error("Error:", error));
});

app.get("/:id", function(req, res) {
  const id = req.params.id;

  fetch("https://api.got.show/api/houses/" + id)
    .then(res => res.json())
    .then(data =>
      res.render("pages/detail", {
        data: data
      })
    )
    .catch(error => console.error("Error:", error));
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
