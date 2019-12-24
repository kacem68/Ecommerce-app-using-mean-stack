import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from '../Model/product';
import {ProduitsService} from '../../Services/produits.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
@Injectable()
export class ProductListComponent implements OnInit {
  produit:Product;
  listProduct:Product[];

  constructor(private serviceProduct:ProduitsService) { }
  ngOnInit() {
    this.getAllproduct();
  }

  getAllproduct(){

      this.serviceProduct.getProduct().subscribe((products)=>{
        this.listProduct=products
      })
  }

  find(){
    this.serviceProduct.getProduct().subscribe((products)=>{
      this.listProduct=products;
      console.log(this.listProduct)
    })

  }
  onAfficher(p:Product)
  {
    this.produit=p;
    alert(`produit ${this.produit.label} est selectionné `)
  }
}
