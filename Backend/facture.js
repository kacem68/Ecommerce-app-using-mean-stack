const express = require('express');
const  router = express.Router();
const mongoose =require('mongoose');
const facture = require('./factureModel')

router.post("/facture",(req,res)=>{

  let fact={
    _id:new mongoose.Types.ObjectId(),
    Num_facture:req.body.Num_facture,
    Num_commande:req.body.Num_commande,
    composition:req.body.composition,
    Total:req.body.Total,
    id_Client:req.body.id_Client,
    date:req.body.date,
  }
  //console.log(fact);
  let Facture = new facture(fact);

  Facture.save((err,f)=>{
    if(err) console.log(err);
    else res.json(f)
  })

})

router.get("/facture",(req,res)=>{
  facture.find((err,factures)=>{
    if(err) console.log(err);
    else res.json(factures);
  })
})
router.get("/facture/:Num",(req,res)=>{
  client.findByNum_facture(req.params.Num,(err,f)=>{
    if (err) console.log(err)
    else res.json(f)
  })
})

module.exports=router
