import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {PanierComponent} from './panier/panier.component';
import {AjoutProduitComponent} from './ajout-produit/ajout-produit.component';
import {DetailProductComponent} from './detail-product/detail-product.component';
import {AthentificationComponent} from './athentification/athentification.component';
import {AuthGuardServiceService} from '../Services/auth-guard-service.service';
import {FactureComponent} from './facture/facture.component';
const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'Panier',component:PanierComponent},
  {path:'Nouveau/Produit',component:AjoutProduitComponent,canActivate:[AuthGuardServiceService]},
  {path:'Authentification',component:AthentificationComponent},
  {path:'Produit/:id',component:DetailProductComponent},
  {path:'facture',component:FactureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
