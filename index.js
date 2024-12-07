const express = require("express");
app = express();
require('express-async-errors')
const db = require("./db");
const bodyParser = require("body-parser");
employeeRoutes = require('./controllers/employee.controller')


// middleware
app.use(bodyParser.json())
app.use('/api/employees',employeeRoutes)

app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})

// First make sure db connection is successful
// then start the express server.
db.query("SELECT 1")
  .then((data) => {
    console.log("MySQL successfully connected!");
    app.listen(3000, () => console.log("server Connected to the PORT 3000"));
  })
  .catch((err) => console.log("db connection failed. \n" + err));
