import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../Model/User';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';
import {AuthServiceService} from '../../Services/auth-service.service';
import {ClientService} from '../../Services/client.service';
const isAuth:boolean=false;
@Component({
  selector: 'app-athentification',
  templateUrl: './athentification.component.html',
  styleUrls: ['./athentification.component.css']
})
@Injectable()
export class AthentificationComponent implements OnInit {
  public isAuth:boolean;
  private urlActif:string='';

  constructor(private router:Router, private clienservice:ClientService,private athentService:AuthServiceService,private ActivateRoute:ActivatedRoute) {
    this.isAuth=true
  }
  disabled:boolean=true;

  user:User={
    username:'',
    password:''
  };
  ngOnInit() {
    this.ActivateRoute.queryParamMap.subscribe(params=>{
      this.urlActif=params.get('activUrl');
    })
  }
  onRemplir(form:NgForm)
  {
    if(form.value['username']!="" && form.value['password']!="")
    {
      this.disabled=false
    }
  }
  onRegester(form:NgForm)
  {
    this.user.password=form.value['password'],
      this.user.username=form.value['username']
    this.athentService.login(this.user.username,this.user.password,this.urlActif).subscribe((resultat)=>{
      this.isAuth=resultat
      if(this.urlActif==null) this.router.navigate([''])
      else
      {
        if(this.urlActif=="/Panier" )
        {
          this.athentService.islogginClient().subscribe((resultat)=>{
            this.isAuth=resultat
            if(resultat==true)         this.router.navigate(['/facture'])
            else this.router.navigate(["/Authentification"],{queryParams:{activUrl:this.urlActif}})
          })
        }
      }
    })
  }


}
