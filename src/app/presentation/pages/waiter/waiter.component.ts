import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { Pizza } from 'src/app/domain/interfaces/Pizza';
import { Drink } from 'src/app/domain/interfaces/Drink';
import { OrderItemsService } from 'src/app/data/order-items/order-items.service';
import { TableService } from 'src/app/data/table-service/table.service';
import { DeliveredDialogComponent } from '../../components/delivered-dialog/delivered-dialog.component';
import { PizzaImp } from 'src/app/domain/items/Pizza';
import { DrinkImp } from 'src/app/domain/items/Drink';


@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent {
  flavor : String = ''
  pizzaOrders : Pizza[] = []
  drinkOrders : Drink[] = []
  constructor(private dialogRef: MatDialog, private ordersService : OrderItemsService, private tableService : TableService){}

  ngOnInit(){
     this.loadOrders()
  }

  loadOrders(){
    this.ordersService.getOrderItems().subscribe({
      next: (response) => {
        this.pizzaOrders = []
        this.drinkOrders = []
        response.forEach(table => {
          table.pizzas.forEach(pizza => {
            if(pizza.status == "DONE"){
              this.pizzaOrders.push(pizza)
            }
          });
          table.drinks.forEach(drink => {
            if(drink.status == "DONE"){
              this.drinkOrders.push(drink)
            }
          })
        });
      },
      error: () => {}
    })
  }

  showDeliveryDialog(any: PizzaImp | Drink, itemType : String) {
    const resultDialog = this.dialogRef.open(DeliveredDialogComponent, {
      data: {
        table: any.tableNumber.toString()
      }
    });
  
    resultDialog.afterClosed().subscribe({
      next: (value) => {
        if (value === true) {
          if (itemType = "PIZZA") {
            this.upgradeStatusOrder(any.id, any.status, "PIZZA");
          } else {
            this.upgradeStatusOrder(any.id, any.status, "DRINK");
          }
        }
      }
    });
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
