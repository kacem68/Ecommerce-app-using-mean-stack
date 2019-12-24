const mongoose =require('mongoose')
const schema=mongoose.Schema;


let facture = new schema({
  Num_facture:String,
  Num_commande:String,
  composition:[{
    id_produit:String,
    total:Number
  }],
  Total:Number,
  id_Client:String,
  date:String,
})

module.exports=mongoose.model('facture',facture);
