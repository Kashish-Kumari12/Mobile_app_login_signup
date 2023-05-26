require('dotenv').config();
const express=require('express');
const authorouter = express.Router();
const mongoose=require('mongoose');
//const User=mongoose.model('Users');
const jwt=require('jsonwebtoken');
const Users = require('../Models/Users');

authorouter.get('/', (req, res) => {
    res.send('Hello, World!');
  });

authorouter.post('/',(req,res)=>{
    const { email, password } = req.body;
    const user = Users.findOne({ email, password });
    console.log('hello world!')
    res.send(user)
    
})

module.exports=authorouter;