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

// first API endpoint...
app.get("/api", function (req, res) {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  });
});

// second API endpoint...
app.get("/api/:input", (req, res) => {
  const input = req.params.input;
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const timestampRegex = /^\d{13}$/;

  if (isoDateRegex.test(input)) {
    res.json({
      unix: new Date(input).getTime(),
      utc: new Date(input).toUTCString(),
    });
  } else if (timestampRegex.test(input)) {
    res.json({
      unix: new Date(parseInt(input)).getTime(),
      utc: new Date(parseInt(input)).toUTCString(),
    });
  } else if (new Date(input).toString() === "Invalid Date") {
    res.json({
      error: "Invalid Date",
    });
  } else {
    const dateObj = new Date(input);
    const isoDateString = dateObj.toISOString();
    res.json({
      unix: new Date(isoDateString).getTime(),
      utc: new Date(isoDateString).toUTCString(),
    });
  }
});

// listen for requests :)
app.listen(port, () => {
  console.log("Your app is listening on port " + " " + port);
});
