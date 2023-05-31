import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delivered-dialog',
  templateUrl: './delivered-dialog.component.html',
  styleUrls: ['./delivered-dialog.component.css']
})
export class DeliveredDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    table : String 
  }){}
    

}
