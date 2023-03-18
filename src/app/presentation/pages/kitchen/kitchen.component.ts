import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
  constructor(private dialogRef: MatDialog){}

  openDialog(){
  this.dialogRef.open(ModalComponent, {
    data: { 
      pizza : {
        name : 'PIZZA Calabresa',
        desc : 'Observação: Não sei o que escrever então vou escrever coisas aleatórias pois eu quero, sou livre e independente ninguem consegue me segurar, pois eu sou o monstro do lago nes(não sei escrever) mas é isso'
      }
    }
  });
  }
}
