const express = require('express');
const cors = require('cors');
const api = require('./api/authentication');
const ambulance = require("./api/ambulance");
const bodyParser = require("body-parser");


var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const port = process.env.PORT || 8080 ;
const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
}))
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.use('/api',api);
app.use("/ambulance", ambulance);

app.get('/',(req,res)=>{
    let data = {message:"You are welcome to sign up api."};
    res.json(data);
});


app.listen(port,()=>{
    console.log(`Server is started at port ${port}`);
});