import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from "@angular/forms";
import {Product} from '../Model/product';
import {MatDialog} from '@angular/material';
import {PopupComponent} from '../popup/popup.component';
import {Router} from '@angular/router';
import {ProduitsService} from '../../Services/produits.service';
import { FileUploader} from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
const URL = 'http://localhost:5000/addproduit';
@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  private titlepopup:any;
  private messagepopup:any;
  private claapoup:any;
  fileData: File=null;
  disabled:boolean=true;

  constructor( public dialog: MatDialog,private router:Router,private produitService:ProduitsService,private toastr:ToastrService) { }



  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
  });

  uplodfile(event,form:FormGroup)
  {
    const file=(event.target as HTMLInputElement).files[0];
    this.fileData=file;
    console.log(this.fileData.name);
    if(form.value.label!=null && form.value.prix!=null && form.value.details!=null && this.fileData!=null)
    {
      this.disabled=false;
    }
  }


  myform = new FormGroup({
    label:new FormControl(),
    prix:new FormControl(),
    details: new FormControl(),
  })

  ngOnInit() {


  }

  onSave(myfrom:FormGroup){

    if( myfrom.value.details!=null && myfrom.value.label!=null  && myfrom.value.prix!=null ){
      let produit:Product=
        {label:myfrom.value.label,prix:myfrom.value.prix,details:myfrom.value.details,image:"../../assets/image/pc.jpg",like:0,    dislike:0}
      this.produitService.fetchProduct(produit,this.fileData).subscribe(()=>{
        console.log(produit)
      })
      //this.uploader.uploadAll()
      this.onOpenPopup('Confirmation','Produit ajouté avec succès','alert alert-success');
    }
  }
  onOpenPopup(title:any,message:any,classname:any):void{
    const dialogRe=this.dialog.open(PopupComponent,{
      width: 'auto',
      data:{titre:title,message:message,classname:classname}
    });
    dialogRe.afterClosed().subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
}
