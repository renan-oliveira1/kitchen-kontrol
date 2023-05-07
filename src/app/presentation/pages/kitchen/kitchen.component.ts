import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { Table } from 'src/app/domain/interfaces/Table';
import { TableService } from 'src/app/data/table-service/table.service';
import { Pizza } from 'src/app/domain/interfaces/Pizza';
import { Drink } from 'src/app/domain/interfaces/Drink';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
  flavor : String = ''
  pizzas : Pizza[] = []
  drinks : Drink[] = []
  
  
  
  constructor(private dialogRef: MatDialog, private tableService : TableService){}

  ngOnInit(){
    this.loadOrders()
  }

  openDialog(pizza: Pizza){
    if(pizza.flavors.length > 1){
      this.flavor = pizza.flavors[0].name + '/' +  pizza.flavors[1].name
    }
    else{
      this.flavor = pizza.flavors[0].name
    }
    this.dialogRef.open(ModalComponent, {
      data: { 
        order : {
          name : this.flavor
          // observation : table.observation
        }
      }
    });
  }

  loadOrders(){
    this.pizzas = []
    this.drinks = []
    this.tableService.getTables().subscribe({
      next: (response) => {
        response.forEach(table => {
          table.pizzas.forEach(pizza => {
            this.pizzas.push(pizza)
          });
          table.drinks.forEach(drink => {
            this.drinks.push(drink)
          })
        })
        console.log(this.pizzas)
        console.log(this.drinks)
        console.log(response)
      },
      error: () => {}
    })
  }

  upgradeStatusOrder(id: number, status: string, itemType: string){
    this.tableService.upgradeStatus(id.toString(), status, itemType).subscribe({
      next: (response) => {
        this.ngOnInit()
      },
      error: () => {}
    })
  }


  
}
