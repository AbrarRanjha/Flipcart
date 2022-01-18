const express=require('express');
const bodyParser=require('body-parser');
const cors =require('cors');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const app=express();
const route=require('./routes/route.js');
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',route);
dotenv.config({path:'./config.env'});
require('./database/db.js');
const DefaultData=require('./default.js');
const PORT=8000;


app.listen(PORT,()=>{
    console.log(`app listen at ${PORT}`);
});
DefaultData();
