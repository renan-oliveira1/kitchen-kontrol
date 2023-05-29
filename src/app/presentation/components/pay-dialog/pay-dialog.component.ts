import { Component } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Pizza } from 'src/app/domain/interfaces/Pizza';
import { Drink } from 'src/app/domain/interfaces/Drink';

@Component({
  selector: 'app-pay-dialog',
  templateUrl: './pay-dialog.component.html',
  styleUrls: ['./pay-dialog.component.css']
})
export class PayDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    payedList: {
      payedPizzas : Pizza[], 
      payedDrinks: Drink[],
      total: number
    }}){}

}
