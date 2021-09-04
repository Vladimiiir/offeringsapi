const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors())

const importData = require("./data.json")
let port = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
    res.send("Our Offerings: Certificates, Diplomas, Bachelors, Masters");
})

app.get("/offerings", (req, res, next) => {
    res.send(importData);
})

app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`);
});