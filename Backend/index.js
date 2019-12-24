const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const server = express();
const path=require('path')
const PORT = 5000;
const cors =require('cors');
const routProduit = require('./Produit')
const routesClient = require('./Client')
const routesFacture = require('./facture');


//base de données et cors

mongoose.connect("mongodb://localhost:27017/DB",{ useUnifiedTopology: true ,useFindAndModify: false,useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open',()=>{
  console.log('Mongodb connection etablie avec succes' );
});
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());


// routes
server.use(routProduit);
server.use(routesClient)
server.use(routesFacture)







server.listen(PORT, () => {
  console.log(`server ecoute sur l'adre:${PORT}`);
});
