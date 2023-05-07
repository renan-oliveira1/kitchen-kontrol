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
  pizzas : Pizza[] = []
  drinks : Drink[] = []
  constructor(private dialogRef: MatDialog, private tableService : TableService){}

  ngOnInit(){
    this.loadOrders()
  }

  loadOrders(){
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
        console.log(response)
      },
      error: () => {}
    })
  }

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
          this.upgradeStatusOrder(pizza.id, pizza.status)
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
          this.upgradeStatusOrder(drink.id, drink.status)
        }
      }
    })
  }

  upgradeStatusOrder(id: number, status: string){
    this.tableService.upgradeStatus(id.toString(), status).subscribe({
      next: (response) => {
        this.ngOnInit()
      },
      error: () => {}
    })
  }


}
