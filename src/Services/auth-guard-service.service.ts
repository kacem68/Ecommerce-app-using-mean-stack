import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AthentificationComponent} from '../app/athentification/athentification.component';
import {AuthServiceService} from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate{

  constructor(private AuthService:AuthServiceService,private router:Router ,private routeActive:ActivatedRoute) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    if(this.AuthService.isLoggodin()) return true;
    else{
      let activUrl:string='';

      route.url.map((url)=>{
        activUrl=activUrl+`/${url}`
      })



      this.router.navigate(["Authentification"],{queryParams:{activUrl:activUrl}});
      return false
    }
  }
}
