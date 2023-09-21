/*
* I suggest that you can use Postman to access the APIs
* APIs document:
* to get all students are in "mygroup" : GET http://localhost:5000/ || GET http://localhost:5000/message
* to add a new students to "mygroup": POST http://localhost:5000/MSSV/<id> & A json object {"id": "NEW_ID", "name": "name of new student"}
* to retrieve information about a student in the "mygroup" based on the provided <id>:  GET http://localhost:5000/MSSV/<id>
* to retrieve a name of student by their id : GET http://localhost:5000/message/<id>
* Done by: Minh Tri Nguyen | 20110422
*/
const express = require("express");
const bodyParser = require("body-parser");
const mainRouter = require("./routes/index");

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