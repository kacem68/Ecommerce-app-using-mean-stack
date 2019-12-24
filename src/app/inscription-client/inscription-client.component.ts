import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ModelClient} from '../Model/ModelClient';
import {ClientService} from '../../Services/client.service';
import {Router} from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';
import { FormGroup, FormBuilder } from '@angular/forms';





@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.css']
})
export class InscriptionClientComponent implements OnInit {
  public reg =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  email = new FormControl('', [Validators.required, Validators.pattern(this.reg)]);
  public reg1=/^[a-z\s]{0,255}$/i  ;
  chaine=new FormControl('', [Validators.required, Validators.pattern(this.reg1)]);
  public reg2=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
  number=new FormControl('', [Validators.required, Validators.pattern(this.reg2)]);

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'entrer un mail valid' :
        '';
  }
  getErrorMessage1() {
    return this.chaine.hasError('required') ? 'You must enter a value' :
      this.chaine.hasError('chaine') ? 'entrer un caractere valid' :
        '';
  }
  getErrorMessage2() {
    return this.number.hasError('required') ? 'You must enter a value' :
      this.number.hasError('tele') ? 'entrer un caractere valid' :
        '';
  }
  getErrorMessage3() {
    return this.number.hasError('required') ? 'entrez un prenom valide' :
      this.number.hasError('prenom') ? 'entrer un caractere valid' :
        '';
  }
  
  client:ModelClient={
    nom:"",
    prenom:"",
    adress:"",
    mail:"",
    tele:"",
    username:"",
    password:""
  };
  disabled:boolean=true;
  public frmSignup: FormGroup;

  constructor(
  private fb: FormBuilder,
    
  
    public dialogRef: MatDialogRef<InscriptionClientComponent>,
    private serviceClient:ClientService,
    private route:Router
  ) { 
    this.frmSignup = this.createSignupForm();

  }

  nom:string;
  ngOnInit() {
    this.dialogRef
  }
  onClosePoup()
  {
    this.dialogRef.close();
  }

  onSave()
  {
    this.serviceClient.addClient(this.client).subscribe((cl)=>{
      this.serviceClient.setThisClient(cl);
      this.onClosePoup();
      this.route.navigate(['/facture'])
    })


  }
  onchange()
  {
    if(this.client.password!="" && this.client.prenom!="" && this.client.mail!="" && this.client.adress!="" && this.client.tele!=null && this.client.username!=null && this.client.password!="" )
    {
      this.disabled=false
    }
    else if (this.client.password!="" || this.client.prenom!="" || this.client.mail!="" || this.client.adress!="" || this.client.tele!=null || this.client.username!=null || this.client.password!="" ) {
      this.disabled=true
    }
  }
}
