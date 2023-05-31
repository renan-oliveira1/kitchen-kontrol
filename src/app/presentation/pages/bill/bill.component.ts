import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableService } from 'src/app/data/table-service/table.service';
import { Pizza } from 'src/app/domain/interfaces/Pizza';
import { Drink } from 'src/app/domain/interfaces/Drink';
import { Table } from 'src/app/domain/interfaces/Table';
import { OrderItemsService } from 'src/app/data/order-items/order-items.service';
import { PayDialogComponent } from '../../components/pay-dialog/pay-dialog.component';


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
  pizzaPayingList: Pizza[]= []
  drinkPayingList: Drink[]= []

  constructor(private dialogRef: MatDialog, private tableService : TableService, private orderItemsService : OrderItemsService){}

  ngOnInit(){
    this.loadItems()
  }

  loadItems(){
    this.orderPizzas = []
    this.orderDrinks = []
    this.tableService.getTableById().subscribe({
      next: (response) => {
        this.table = response,
        response.pizzas.forEach(pizza => {
          if(pizza.status == "DELIVERED"){
            this.orderPizzas.push(pizza)
          }
        }
          )
        response.drinks.forEach(drink => {
          if(drink.status == "DELIVERED"){
            this.orderDrinks.push(drink)
          }
        })
        this.getOrderTotal()
      },
      error: () => {}
    })
  }
  showPayDialog(){
    let pizzasRequest : Pizza[] = []
    let drinksRequest : Drink[] = []
    if(this.isAnyitemSelected()){
      pizzasRequest = this.pizzaPayingList
      drinksRequest = this.drinkPayingList
    }
    else{
      pizzasRequest = this.orderPizzas
      drinksRequest = this.orderDrinks
    }
    const resultDialog = this.dialogRef.open(PayDialogComponent, {
      data: { 
        payedList : {
          payedPizzas : pizzasRequest,
          payedDrinks : drinksRequest,
          total : this.orderTotal.toFixed(2)
        }
      }
    });

    resultDialog.afterClosed().subscribe({
      next: (value) => {
        if(value == true){
          this.payItems(pizzasRequest, drinksRequest);
        }
        else{
        }
      }
    })
  }
  isAnyitemSelected(){
    if(this.drinkPayingList.length == 0 && this.pizzaPayingList.length == 0) return false
    else return true
  }

  getOrderTotal(){
    if(!this.isAnyitemSelected()){
      this.orderTotal = 0;
      this.orderPizzas.forEach(item => {
        (this.orderTotal += item.price).toFixed(2)
      });
  
      this.orderDrinks.forEach(item => {
        (this.orderTotal += item.price).toFixed(2)
      });
    }
    else{
      this.orderTotal = 0;
      this.pizzaPayingList.forEach(item => {
        (this.orderTotal += item.price).toFixed(2)
      });
  
      this.drinkPayingList.forEach(item => {
        (this.orderTotal += item.price).toFixed(2)
      });
    }
  }

handlePizzaCheckboxChange(event: any, orderPizza: any) {
  if (event.target.checked) {
    this.pizzaPayingList.push(orderPizza)
  } else {
    this.pizzaPayingList = this.pizzaPayingList.filter(pizza => pizza !== orderPizza);
  }
  this.getOrderTotal()
}

handleDrinkCheckboxChange(event: any, orderDrink: any) {
  if (event.target.checked) {
    this.drinkPayingList.push(orderDrink)
  } else {
    this.drinkPayingList = this.drinkPayingList.filter(pizza => pizza !== orderDrink);
  }
  this.getOrderTotal()
}

async updateOrdersStatus(pizzaPayed : Pizza[], drinksPayed : Drink[]): Promise<void> {
  for (const pizza of pizzaPayed) {
    console.log(pizza)
    await this.tableService.upgradeStatus(pizza.id.toString(), pizza.status, pizza.flavors[0].itemType).toPromise();
  }
  for (const drink of drinksPayed) {
    await this.tableService.upgradeStatus(drink.id.toString(), drink.status, drink.item.itemType).toPromise();
  }
  this.pizzaPayingList = [];
  this.drinkPayingList = [];
  this.getOrderTotal();
  await this.loadItems();
}

async payItems(pizzaPayed : Pizza[], drinksPayed : Drink[]): Promise<void> {
  await this.updateOrdersStatus(pizzaPayed, drinksPayed);
}

}
