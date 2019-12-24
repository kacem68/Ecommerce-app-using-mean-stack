import {Component, EventEmitter, Inject, Injectable, Input, OnInit, Output} from '@angular/core';
import {Product} from '../Model/product';
import {PanierComponent} from '../panier/panier.component';
import {monPanier} from '../Model/Panier';
import {ProduitsService} from '../../Services/produits.service';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  constructor( private monpanier:PanierComponent,private produitsService:ProduitsService
  ) { }
  @Input() Products:Product[];
  @Output() private produit = new EventEmitter<Product>();
  valeur;
  afficher(p:Product){
    this.produit.emit(p);
  }
  total:number;
  status:boolean=false
  gettotal():number{
    return this.monpanier.total();
  }
  ngOnInit() {

  }
  tottalByProduct(p:Product):number{
    return this.monpanier.totalParProduct(p);
  }

onAddProduct(p:Product){
   this.monpanier.AddPanier(p);
}
  onDislik(produit:Product):void{
    this.Products.map(p=>{
      if(p._id==produit._id){
        p.dislike=p.dislike+1;
        this.produitsService.updateProduct(p).subscribe(res=>{
        })
      }
    })
  }
  onlik(produit:Product):void{
    this.Products.map(p=>{
      if(p._id==produit._id){
        p.like=p.like+1;
        this.produitsService.updateProduct(p).subscribe(res=>{
        })
      }
    })
  }

  setvaleur(val):Observable<any>{
    this.valeur=val
    return of();
  }

}
