import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderItemsService } from 'src/app/data/order-items/order-items.service';
import { OrderItem } from 'src/app/domain/interfaces/OrderItem';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {

  orderItems : OrderItem[] = []

  orderTotal: number = 0

  constructor(private dialogRef: MatDialog, private orderItemService : OrderItemsService){}

  ngOnInit(){
    this.loadItems()
  }

  loadItems(){
    this.orderItemService.getOrderItems().subscribe({
      next: (response) => {
        this.orderItems = response,
        this.getOrderTotal()
      },
      error: () => {}
    })
  }

  openPayDialog(){
    console.log("abrindo dialog pay")
  }

  getOrderTotal(){
    this.orderItems.forEach(item => {
      this.orderTotal += item.price
    });
  }

}
