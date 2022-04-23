const express = require('express');
const cors = require('cors');
require('dotenv').config;
const port = process.env.PORT || 5000

const app = express();

// middlware
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Post book is coming")
})

app.listen(port, () => {
    console.log("Listening to the port ", port);
})