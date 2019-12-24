import { Component } from '@angular/core';
import {PanierComponent} from './panier/panier.component';
import {ProductListComponent} from './product-list/product-list.component';
import {Observable, of} from 'rxjs';
import {ProductItemComponent} from './product-item/product-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private monPanier:PanierComponent, private product:ProductItemComponent){
  }
  title = 'GestionPanier';
  panelOpenState = false;
  valeur;
  getTotal():number{
    return this.monPanier.total();
  }
  chercher()
  {
    this.product.setvaleur(this.valeur).subscribe();
  }
}
