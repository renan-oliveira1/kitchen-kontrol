import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PizzaOrderService } from 'src/app/data/pizza-order/pizza-order.service';
import { PizzaItem } from 'src/app/domain/interfaces/PizzaItem';
import { ModalComponent } from '../../components/modal/modal.component';
import { DeliveredDialogComponent } from '../../components/delivered-dialog/delivered-dialog.component';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent {
  pizzaOrders : PizzaItem[] = []
  constructor(private dialogRef: MatDialog, private pizzaOrderService : PizzaOrderService){}

  ngOnInit(){
    this.loadItems()
  }

  loadItems(){
    this.pizzaOrderService.getPizzaOrders().subscribe({
      next: (response) => {
        console.log(response)
        this.pizzaOrders = response
      },
      error: () => {}
    })
  }

  showDetailsDialog(pizzaItem: PizzaItem){
    this.dialogRef.open(ModalComponent, {
      data: { 
        order : {
          name : pizzaItem.pizzas,
          observation : pizzaItem.observation
        }
      }
    });
  }

  showDeliverDialog(pizzaItem: PizzaItem){
    const resultDialog = this.dialogRef.open(DeliveredDialogComponent, {
      data: { 
        order : {
          name : pizzaItem.pizzas,
          table : pizzaItem.table
        }
      }
    });

    resultDialog.afterClosed().subscribe({
      next: (value) => {
        if(value == true){
          this.upgradeStatusOrder(pizzaItem.id, pizzaItem.status)
        }
      }
    })
  }

  upgradeStatusOrder(id: number, status: string){
    this.pizzaOrderService.upgradeStatus(id.toString(), status).subscribe({
      next: (response) => {
        this.ngOnInit()
      },
      error: () => {}
    })
  }


}
