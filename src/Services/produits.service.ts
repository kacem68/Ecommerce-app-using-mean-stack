import { Injectable } from '@angular/core';
import {Product} from '../app/Model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const products:Product[]=[
  {
    _id:"P1",
    label:"PC",
    prix:4000,
    image:"../../assets/image/pc.jpg",
    details:"pc gamer 4GPU i7 8G",
    like:0,
    dislike:0
  },
  {
    _id:"P2",
    label:"PC  GAMER",
    prix:5000,
    image:"../../assets/image/pc.jpg",
    details:"pc gamer 4GPU i7 7G",
    like:0,
    dislike:0
  }
]
@Injectable({
  providedIn:'root'
})
export class ProduitsService {
  uri='http://localhost:5000';
  constructor(private http:HttpClient) { }
  produits:Product[]=products
  p:Product;
  getProducts():Product[]{
    return this.produits;
  }
  getProductById(id):Product{
    this.produits.map((pro)=>{
      if(pro._id==id){
        this.p=pro
      }
    })
    return this.p
  }
  getProduct(){
    return this.http.get<Product[]>(`${this.uri}/Produits`)
  }
  updateProduct(produit:Product){
    return this.http.put(`${this.uri}/produit/${produit._id}`,produit);
  }
  fetchProduct(produit,image:File)
  {
    var formadata:any = new FormData();
    formadata.append("label",produit.label);
    formadata.append("prix",produit.prix);
    formadata.append("details",produit.details);
    formadata.append("like",produit.like);
    formadata.append("dislike",produit.dislike);
    formadata.append("image",image);

    return this.http.post(`${this.uri}/addproduit`,formadata);
  }
  getProductOne(id){
    return this.http.get(`${this.uri}/Produit/${id}`);
  }

}
