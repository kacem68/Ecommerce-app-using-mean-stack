const express = require('express');
const  router = express.Router();
const mongoose =require('mongoose');
const produit = require('./ProduiModel')
const path = require('path')
const multer=require('multer');
const PATH='../src/assets/image';
var nom='';
let storage=multer.diskStorage({

  destination:(req,file,cb)=>{
    cb(null,PATH)
  },
  filename:(req,file,cb)=>{
    nom=file.originalname;
    cb(null,Date.now()+'-'+file.originalname);
  }
})
let upload=multer({
  storage:storage
});


router.get("/Produits",(req,res)=>{
  produit.find((err,listProduits)=>{
    if (err) console.log(err)
    else res.json(listProduits)
  })
})
router.get("/Produit/:id",(req,res)=>{
  produit.findById(req.params.id,(err,p)=>{
    if (err) console.log(err)
    else res.json(p)
  })
})



router.post("/addproduit",upload.single('image'),(req,res,next)=>{
console.log(req.body)
  let product = {
    _id: new mongoose.Types.ObjectId(),
    label:req.body.label,
    prix:req.body.prix,
    details:req.body.details,
    image:path.basename(req.file.path),
    like:req.body.like,
    dislike:req.body.dislike

  }
  console.log(product);

  let p= new produit(product)
  p.save((err,prod)=>{
    if(err) console.log(err);
    else res.json(prod);
  })


})

router.put("/produit/:id",(req,res)=>{
  let product = {
    label:req.body.label,
    prix:req.body.prix,
    details:req.body.details,
    image:req.body.image,
    like:req.body.like,
    dislike:req.body.dislike
  }
  produit.findByIdAndUpdate(req.params.id,product,(err,p)=>{
    if(err) console.log(err)
    else res.json(p)
  })


})


module.exports=router;
