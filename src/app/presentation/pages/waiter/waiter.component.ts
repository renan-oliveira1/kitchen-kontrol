import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { TableService } from 'src/app/data/table-service/table.service';
import { Pizza } from 'src/app/domain/interfaces/Pizza';
import { Drink } from 'src/app/domain/interfaces/Drink';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent {
  flavor : String = ''
  pizzaOrders : Pizza[] = []
  drinkOrders : Drink[] = []
  constructor(private dialogRef: MatDialog, private tableService : TableService){}

  ngOnInit(){
    // this.loadOrders()
  }

  // loadOrders(){
  //   this.tableService.getTableById().subscribe({
  //     next: (response) => {
  //       this.table = response,
  //       response.pizzas.forEach(pizza => {
  //         if(pizza.status !== "ONCART" && pizza.status !== "PAYED" && pizza.status !== "DELIVERED"){
  //           this.pizzaOrders.push(pizza)
  //         }
  //       }
  //         )
  //       response.drinks.forEach(drink => {
  //         if(drink.status !== "ONCART" && drink.status !== "PAYED" && drink.status !== "DELIVERED"){
  //           this.drinkOrders.push(drink)
  //         }
  //       })
  //     },
  //     error: () => {}
  //   })
  // }

  showPizzaDetailsDialog(pizza: Pizza){
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
          // observation : pizzaItem.observation
        }
      }
    });
  }

  showDrinkDetailsDialog(drink: Drink){
    this.dialogRef.open(ModalComponent, {
      data: { 
        order : {
          name : drink.item.name
          // observation : pizzaItem.observation
        }
      }
    });
  }
  showPizzaDeliveryDialog(pizza: Pizza){
    if(pizza.flavors.length > 1){
      this.flavor = pizza.flavors[0].name + '/' +  pizza.flavors[1].name
    }
    else{
      this.flavor = pizza.flavors[0].name
    }
    const resultDialog = this.dialogRef.open(ModalComponent, {
      data: { 
        order : {
          name : this.flavor,
          table : pizza.tableNumber
        }
      }
    });

    resultDialog.afterClosed().subscribe({
      next: (value) => {
        if(value == true){
          this.upgradeStatusOrder(pizza.id, pizza.status, pizza.flavors[0].itemType)
        }
      }
    })
  }

  showDrinkDeliveryDialog(drink: Drink){
    const resultDialog = this.dialogRef.open(ModalComponent, {
      data: { 
        order : {
          name : drink.item.name,
          table : drink.tableNumber
        }
      }
    });

    resultDialog.afterClosed().subscribe({
      next: (value) => {
        if(value == true){
          this.upgradeStatusOrder(drink.id, drink.status, drink.item.itemType)
        }
      }
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
