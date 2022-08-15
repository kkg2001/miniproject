const dotenv = require("dotenv"); 
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path:'./config.env'});
require('./db/conn');
app.use(express.json());

app.use(require('./router/auth'));
const User = require('./model/userSchema');
const PORT=process.env.PORT;
// const DATABASE=process.env.DATABASE;


const middleware =(req,res, next) => {
    console.log('Hello my Middleware');
    next();
}


app.get('/',(req,res)  => {
    res.send('Hello world from the server app.js');
});
app.get('/about', middleware, (req,res)  => {
    res.send('Hello about world from the server');
});
    app.get('/contact',(req,res)  => {
        res.send('Hello contact world from the server');
    });
    app.get('/signin',(req,res)  => {
        res.send('Hello Login world from the server');
    });
    app.get('/signup',(req,res)  => {
        res.send('Hello Registration world from the server');
    });
app.listen(PORT, () => {
    console.log("Server is running at port ${PORT}");
})