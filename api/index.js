const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};


app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(cors());


app.get("/", cors(corsOptions), (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Welcom from nodejs");
});



const db = require("./models/index");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
require("./routes/RedeemingCodes")(app);
app.listen(4000, () => {
  console.log("running");
});
