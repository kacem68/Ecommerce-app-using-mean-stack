import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import {PanierComponent} from '../panier/panier.component';
import {Facture, monPanier} from '../Model/Panier';
import {AuthServiceService} from '../../Services/auth-service.service';
import {FactureService} from '../../Services/facture.service';
import {ModelClient} from '../Model/ModelClient';
import {ClientService} from '../../Services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  private today= new Date();
  private numFacture=''
  private num='';
  private date=''
  private maFacture:Facture={
    id_Client:"",
    date:"",
    Num_facture:"",
    Total:0,
    composition:[null],
    Num_commande:""
  };
  private client:ModelClient;
  private monPanier:monPanier[]=[];
  constructor(private route:Router,private panier:PanierComponent, private serviceAuth:AuthServiceService,private serviceClient:ClientService, private factureService:FactureService) { }

  ngOnInit() {
    this.panier.getPanier().subscribe((p)=>{
      this.monPanier=p;
      console.log(this.monPanier)
    })
    this.getClient();
    this.getNumComande();
    this.getDate()
    this.getNumFacture();

  }
  getClient(){
    this.serviceClient.getThisClient().subscribe((cl)=>{
      this.client=cl;
    })
  }

  getDate():any{
    this.date=formatDate(this.today,'dd-MM-yyyy ','en-US')
  }
  getNumFacture():any{
    this.numFacture='Fr/'+formatDate(this.today,'hhmmss-ddmmyy ','en-US')
  }
  getNumComande():any
  {
    this.num=formatDate(this.today,'hhmmss','en-US')+'/'+formatDate(this.today,'ddmmyy','en-US')
    return this.num
  }
  getTotal()
  {
    let total:number=0;
    this.monPanier.map(p=>{
      total=total+p.total*p.produit.prix;
    })
    return total;
  }

  SaveFacture(){
    this.maFacture.id_Client=this.client._id;
    this.maFacture.Num_commande=this.num;
    this.maFacture.Total=this.getTotal();
    this.maFacture.Num_facture=this.numFacture
    this.maFacture.composition.splice(0);
    this.monPanier.map(p=>{
      this.maFacture.composition.push({id_produit:p.produit._id,total:p.total});
    })
    this.maFacture.date=this.date;
    console.log(this.maFacture);
    this.factureService.SaveFacture(this.maFacture).subscribe(f=>{
      console.log(f)
      this.monPanier.splice(0);
      this.route.navigate([''])

    })
  }

}
