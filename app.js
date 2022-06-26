const express = require("express");
const errorController = require("./controllers/errorController");
const PORT = 3000;

const app = express();

// set static public folder
app.use(express.static('public'))
// set the view engine to ejs
app.set('view engine', 'ejs');
// Routes
const routes = require("./routes/index");
app.use("/", routes);

// Error Handler
app.use(errorController);

// Listen server
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
