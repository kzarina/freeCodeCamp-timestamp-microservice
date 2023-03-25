// index.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const port = 3000;
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

const responseObject = {};
app.get("/api/:input", (req, res) => {
  const input = req.params.input;
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const timestampRegex = /^\d{13}$/;
  if (isoDateRegex.test(input) && !isNaN(Date.parse(input))) {
    responseObject["unix"] = new Date(input).getTime();
    responseObject["utc"] = new Date(input).toUTCString();
  } else if (timestampRegex.test(input)) {
    const timestamp = parseInt(input);
    responseObject["unix"] = timestamp;
    responseObject["utc"] = new Date(timestamp).toUTCString();
  } else {
    const dateObj = new Date(input);
    const isoDateString = dateObj.toISOString();
    responseObject["unix"] = new Date(isoDateString).getTime();
    responseObject["utc"] = new Date(isoDateString).toUTCString();
  }
  res.send(responseObject);
});

// listen for requests :)
app.listen(port, () => {
  console.log("Your app is listening on port " + " " + port);
});
