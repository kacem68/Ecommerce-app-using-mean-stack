import {Component, Injectable, OnInit} from '@angular/core';
import {Panier} from '../Model/Panier';
import {Product} from '../Model/product';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {monPanier} from '../Model/Panier';
import {Observable, of} from 'rxjs';
import {MatDialog} from '@angular/material';
import {InscriptionComponent} from '../inscription/inscription.component';
import {InscriptionClientComponent} from '../inscription-client/inscription-client.component';


const monPanier:Panier={
  produits:[],
  total:0
};
const panier:monPanier[]=[];
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
@Injectable()
export class PanierComponent implements OnInit {
  panier=panier;
  inscrit:boolean;
  activUrl:string='';
  constructor(private route:Router, public dialog: MatDialog,private activedroute:ActivatedRoute) {
  }
  liste:number=0;
  ngOnInit() {
    console.log(this.panier)
  }
  getPanier():Observable<monPanier[]>{
    return of(this.panier);
  }

  AddPanier(p:Product)
  {

      if(this.panier.length>0)
      {
        let panier1:monPanier;
          panier1=this.panier.find(item=>item.produit._id==p._id);

        if(panier1!=null){
          this.panier.find(item=>item.produit._id==panier1.produit._id).total=panier1.total+1;
        }
        else {
          this.panier.push({produit:p,total:1})
        }
      }
      else this.panier.push({produit:p,total:1})

  }




  total():number{
    if(this.panier.length==0) return 0
    else {
      let total:number=0;
      this.panier.map(p=>{
        total=total+p.total
      }
      )
      return total;
    }

  }
  totalParProduct(p:Product):number{
     let total:number=0;
     if(this.panier.length>0)
     {
       this.panier.map((produit)=>{
         if(produit.produit._id==p._id){
           total=produit.total
         }
       })
     }

    return total;
  }
  delete(i:number,p:Product){
    if(confirm("tu veux supprimer le produit"+p.label+"de ton panier ?"))
    {
      console.log(i);
      this.panier.splice(i,1);
    }
    else this.route.navigate(['Panier'])
  }
  onAddQuantity(p:monPanier)
  {
    this.panier.find(item=>item.produit._id==p.produit._id).total=p.total+1
  }
  onsubstractQuantity(p:monPanier,i:number)
  {

    if(this.panier.find(item=>item.produit._id==p.produit._id).total!=0){
      this.panier.find(item=>item.produit._id==p.produit._id).total=p.total-1
    }
    else this.delete(i,p.produit);
  }
  onOpenInscription()
  {
    const  DialogREf= this.dialog.open(InscriptionComponent, {
      width:"auto",
      data:{inscrit:this.inscrit}
    })

    DialogREf.afterClosed().subscribe(result=>{
      this.inscrit=result;
      console.log(this.inscrit)
      if(result=='true')
      {
        this.activedroute.snapshot.url.map(url=>{
          this.activUrl=this.activUrl+`/${url}`
        })
        this.route.navigate(['/Authentification'],{queryParams:{activUrl:this.activUrl}})
      }
      else if (result=='false') this.onInscrire() ;
    })
  }
  onInscrire()
  {
    const  Dialog= this.dialog.open(InscriptionClientComponent, {
      width:"auto",
    })
    Dialog.afterClosed().subscribe(result=>{
      console.log("pup up fermé")
    })
  }


}
