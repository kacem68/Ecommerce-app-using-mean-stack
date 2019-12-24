import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import {

  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatDialogModule,
  MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatRadioModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { PanierComponent } from './panier/panier.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import {HttpClientModule} from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';
import {FileSelectDirective} from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';
import { AthentificationComponent } from './athentification/athentification.component';
import { FactureComponent } from './facture/facture.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    PanierComponent,
    AjoutProduitComponent,
    DetailProductComponent,
    PopupComponent,
    FileSelectDirective,
    AthentificationComponent,
    FactureComponent,
    InscriptionComponent,
    InscriptionClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFileUploadModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatRadioModule,
    Ng2SearchPipeModule
  ],
  providers: [PanierComponent,AthentificationComponent,ProductItemComponent,ProductListComponent],
  bootstrap: [AppComponent],
  entryComponents:[PanierComponent,DetailProductComponent,PopupComponent,InscriptionComponent,InscriptionClientComponent]
})
export class AppModule { }
