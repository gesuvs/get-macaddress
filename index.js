const express = require("express");
const axios = require("axios");
const macaddress = require("macaddress");
const app = express();

const state = {};

app.get("/", async (req, res) => {
  await axios.default.get("https://api.ipify.org/?format=json").then(result => {
    state.ip = result.data.ip;
  });
  macaddress.one(function(err, mac) {
    state.mac = mac;
    //res.json({ state });
    res.send(`
    <body style="display:flex; justify-content:center; align-items:center">
    <div>
      <p>ENDEREÇO IP: ${state.ip}</p>
      <p>ENDEREÇO MAC: ${state.mac}</p>
    </div>
    </body>
    `);
  });
});

app.listen(8787, () => {
  console.log("subiu");
});
