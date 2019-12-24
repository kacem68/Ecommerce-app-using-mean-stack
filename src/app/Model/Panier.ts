import {Product} from './product';

export interface Panier {
  produits?:Product[],
  total?:number
}

export interface monPanier {
  produit:Product,
  total:number
}

export interface Facture {
  Num_facture:string,
  Num_commande:string,
  composition:[{
    id_produit:string,
    total:number,
  }],
  Total:number,
  id_Client:string;
  date:string;
}
