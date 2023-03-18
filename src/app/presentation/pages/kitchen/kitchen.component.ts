import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PizzaOrderService } from 'src/app/data/pizza-order/pizza-order.service';
import { PizzaItem } from 'src/app/domain/interfaces/PizzaItem';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
  
  pizzaOrders: PizzaItem[] = []
  
  constructor(private dialogRef: MatDialog, private pizzaOrderService : PizzaOrderService){}

  ngOnInit(){
    this.loadPizzas()
  }

  openDialog(pizzaItem: PizzaItem){
    this.dialogRef.open(ModalComponent, {
      data: { 
        order : {
          name : pizzaItem.pizzas,
          observation : pizzaItem.observation
        }
      }
    });
  }

  loadPizzas(){
    this.pizzaOrderService.getPizzaOrders().subscribe({
      next: (response) => {
        this.pizzaOrders = response,
        console.log(response)
      },
      error: () => {}
    })
  }


  
}
