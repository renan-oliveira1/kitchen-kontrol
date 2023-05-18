import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableService } from 'src/app/data/table-service/table.service';
import { Pizza } from 'src/app/domain/interfaces/Pizza';
import { Drink } from 'src/app/domain/interfaces/Drink';
import { Table } from 'src/app/domain/interfaces/Table';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  table!: Table;

  orderTotal: number = 0
  orderPizzas: Pizza[] = []
  orderDrinks: Drink[] = []

  constructor(private dialogRef: MatDialog, private tableService : TableService){}

  ngOnInit(){
    this.loadItems()
  }

  loadItems(){
    this.tableService.getTableById().subscribe({
      next: (response) => {
        this.table = response,
        response.pizzas.forEach(pizza => {
          if(pizza.status !== "ONCART" && pizza.status !== "PAYED"){
            this.orderPizzas.push(pizza)
          }
        }
          )
        response.drinks.forEach(drink => {
          if(drink.status !== "ONCART" && drink.status !== "PAYED"){
            this.orderDrinks.push(drink)
          }
        })
        this.getOrderTotal()
      },
      error: () => {}
    })
  }

  openPayDialog(){
    console.log("abrindo dialog pay")
  }

  getOrderTotal(){
    this.orderPizzas.forEach(item => {
      (this.orderTotal += item.price).toFixed(2)
    });

    this.orderDrinks.forEach(item => {
      (this.orderTotal += item.price).toFixed(2)
    });
  }

}
