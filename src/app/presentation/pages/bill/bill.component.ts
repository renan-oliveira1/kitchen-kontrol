import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableService } from 'src/app/data/table-service/table.service';
import { Table } from 'src/app/domain/interfaces/Table';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  table!: Table;

  orderTotal: number = 0

  constructor(private dialogRef: MatDialog, private tableService : TableService){}

  ngOnInit(){
    this.loadItems()
  }

  loadItems(){
    this.tableService.getTableById().subscribe({
      next: (response) => {
        this.table = response,
        this.getOrderTotal()
      },
      error: () => {}
    })
  }

  openPayDialog(){
    console.log("abrindo dialog pay")
  }

  getOrderTotal(){
    this.table.pizzas.forEach(item => {
      this.orderTotal += item.price
    });

    this.table.drinks.forEach(item => {
      this.orderTotal += item.price
    });
  }

}
