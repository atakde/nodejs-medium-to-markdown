const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const markdownController = require("../controllers/markdownController");

// create application/x-www-form-urlencoded parser
var jsonParser = bodyParser.json()

router.get("/", (req, res) => {
  console.log("Hello World");
  res.render('home/index', { markdown: null });
});

router.post("/markdown", jsonParser, (req, res) => {
  const url = req.body.url;
  markdownController.getMarkdownFromUrl(url).then(markdown => {
    // return json response
    res.json({ markdown: markdown });
  });
});

module.exports = router;