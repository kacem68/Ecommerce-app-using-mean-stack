const express = require('express');
const  router = express.Router();
const mongoose =require('mongoose');
const client = require('./ClientModel')

router.post("/Client",(req,res)=>{
  let cl={
    _id:new mongoose.Types.ObjectId(),
    nom:req.body.nom,
    prenom:req.body.prenom,
    adress:req.body.adress,
    mail:req.body.mail,
    tele:req.body.tele,
    username:req.body.username,
    password:req.body.password,
  }
  let CLIENT= new client(cl);
  CLIENT.save((err,cli)=>{
    if(err) console.log(err);
    else res.json(cli)
  })
})

router.get("/Client",(req,res)=>{
  client.find((err,Clients)=>{
    if(err) console.log(err);
    else res.json(Clients);
  })
})/*
router.get("/Client/:id",(req,res)=>{
  client.findById(req.params.id,(err,C)=>{
    if (err) console.log(err)
    else res.json(C)
  })
})*/
router.get("/Client/:username",(req,res)=>{
  console.log(req.params.username);
  client.findOne({username: req.params.username},(err,C)=>{
    if (err) console.log(err)
    else res.json(C)
  })
})


module.exports=router
