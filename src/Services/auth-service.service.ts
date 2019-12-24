import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ClientService} from './client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isloggedin:boolean;
  private isloggedClient:boolean;
  private username:string;
  constructor(private clientservice:ClientService) {
    this.isloggedin=false
  }


  login(username:string, password:string,url:string):Observable<any>
  {
    if(url=="/Nouveau/Produit")
    {
      if(username=="admin" && password=="admin")
      {
        this.isloggedin=true;

      }
    }
    else if( url=="/Panier") {
      this.clientservice.getClientByUsername(username).subscribe((cli)=>{
        if(cli!=null)
        {
          if(cli.username==username && cli.password==password)
          {
            this.isloggedClient=true
            this.clientservice.setThisClient(cli);
          }
        }

      })
    }
    return of(this.isloggedin)

  }
  isLoggodin():boolean
  {
    return  this.isloggedin;
  }
  logoutuser()
  {
    this.isloggedin=false
  }
  getUsername():Observable<string>
  {
    return of(this.username);
  }
  islogginClient():Observable<boolean>
  {
    return  of(this.isloggedClient)
  }
}
