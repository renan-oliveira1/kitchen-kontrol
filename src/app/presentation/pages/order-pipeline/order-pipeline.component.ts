import { Component } from '@angular/core';
import { PizzaOrderService } from 'src/app/data/pizza-order/pizza-order.service';
import { PizzaItem } from 'src/app/domain/interfaces/PizzaItem';

@Component({
  selector: 'app-order-pipeline',
  templateUrl: './order-pipeline.component.html',
  styleUrls: ['./order-pipeline.component.css']
})
export class OrderPipelineComponent {
  pizzaOrders: PizzaItem[] = []
  constructor(private pizzaOrderService : PizzaOrderService){}

  ngOnInit(){
    this.loadPizzas()
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
