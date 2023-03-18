import { Component } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    pizza: {
      name : String, 
      desc: String
    }}){}

  
}
