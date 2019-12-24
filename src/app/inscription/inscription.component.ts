import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


export interface DialogueData {
  inscrit: boolean;

}
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscrit:boolean;
  constructor(
    public dialogRef: MatDialogRef<InscriptionComponent>,
    @Inject(MAT_DIALOG_DATA)  public data :{inscrit:string}
  ) { }

  ngOnInit() {
    this.dialogRef
  }
  onClosePoup()
  {
    this.dialogRef.close();
  }
  getInscrit():boolean
  {
    return this.inscrit;
  }

}
