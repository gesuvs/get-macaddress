const express = require("express");
const macaddress = require("macaddress");
const app = express();

app.get("/", (req, res) => {
  macaddress.one(function(err, mac) {
    res.json({ mac });
  });
});

app.listen(8787, () => {
  console.log("subiu");
});
