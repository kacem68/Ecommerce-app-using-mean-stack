import { Injectable } from '@angular/core';
import {Panier} from '../app/Model/Panier';
import {Facture} from '../app/Model/Panier';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  uri='http://localhost:5000';
  private maFacture:Facture;
  constructor(private http:HttpClient) { }
  SaveFacture(facture:Facture){
    return this.http.post(`${this.uri}/facture`,facture);
  }

}
