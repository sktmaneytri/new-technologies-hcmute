const express = require("express");
const bodyParser = require("body-parser");
const mainRouter = require("./week04/routes/index");

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Middleware log giao thức POST và GET
app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});

app.use("/", mainRouter); // Sử dụng router từ routes/index.js

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});