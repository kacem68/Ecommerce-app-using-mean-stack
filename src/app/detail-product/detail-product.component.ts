import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../Model/product';
import {ProduitsService} from '../../Services/produits.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
@Injectable()
export class DetailProductComponent implements OnInit {
  constructor(private ps:ProduitsService,private route: ActivatedRoute ) { }
  Produit:any=[];
  ngOnInit() {
    const id= this.route.snapshot.params['id'];
    console.log(id);
    this.ps.getProductOne(id).subscribe((p)=>{
      this.Produit.push(p);
    });
    console.log(this.ps.getProductById(id));
  }
}
