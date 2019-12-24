const mongoose =require('mongoose')
const schema=mongoose.Schema;
let produit= new schema({
  _id:schema.Types.ObjectID,
  label:String,
  prix:Number,
  details:String,
  image:String,
  like:Number,
  dislike:Number,
})
module.exports=mongoose.model('listproduit',produit);
