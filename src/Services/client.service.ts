import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelClient} from '../app/Model/ModelClient';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  uri='http://localhost:5000';
  private Client:ModelClient
  constructor(private  http:HttpClient) { }
  addClient(cl:ModelClient)
  {
    return this.http.post<ModelClient>(`${this.uri}/Client`,cl);
  }

  getThisClient():Observable<ModelClient>
  {
    return of(this.Client);
  }
  getClientByUsername(username:string)
  {
    return this.http.get<ModelClient>(`${this.uri}/Client/${username}`);
  }
  getClient()
  {
    return this.http.get(`${this.uri}/Client`);
  }
  setThisClient(cl:ModelClient)
  {
    this.Client=cl;
  }

}
