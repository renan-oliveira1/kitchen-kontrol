import { Component } from '@angular/core';
import { TableService } from 'src/app/data/table-service/table.service';
import { Drink } from 'src/app/domain/interfaces/Drink';
import { Pizza } from 'src/app/domain/interfaces/Pizza';
import { Table } from 'src/app/domain/interfaces/Table';

@Component({
  selector: 'app-order-pipeline',
  templateUrl: './order-pipeline.component.html',
  styleUrls: ['./order-pipeline.component.css']
})
export class OrderPipelineComponent {
  table!: Table;
  pizzasOrder: Pizza[] = []
  drinksOrder: Drink[] = []

  constructor(private tableService : TableService){}

  ngOnInit(){
    this.loadPizzas()
  }

  loadPizzas(){
    this.tableService.getTableById().subscribe({
      next: (response) => {
        this.table = response,
        response.pizzas.forEach(pizza => {
          if(pizza.status !== "ONCART" && pizza.status !== "PAYED"){
            this.pizzasOrder.push(pizza)
          }
        }
          )
        response.drinks.forEach(drink => {
          if(drink.status !== "ONCART" && drink.status !== "PAYED"){
            this.drinksOrder.push(drink)
          }
        })
      },
      error: () => {}
    })
  }
}
