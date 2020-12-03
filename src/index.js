const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080

const {totalRecovered}=require("./calculation");

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { connection } = require('./connector')

app.get("/totalRecovered", (req, res)=>{
    const response={
        data:{
            _id:"total",
            recovered:totalRecovered
        }
    }
    res.send(response);
});




app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;