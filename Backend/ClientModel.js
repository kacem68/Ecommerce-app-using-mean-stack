const mongoose =require('mongoose')
const schema=mongoose.Schema;

let client = new schema({
  _id:schema.Types.ObjectID,
nom:String,
prenom:String,
adress:String,
mail:String,
tele:String,
username:String,
password:String,
})
module.exports=mongoose.model("client",client);
