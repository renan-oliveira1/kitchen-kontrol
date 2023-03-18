import { Component, Input, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/core/CategoryItem';
import { Item } from 'src/app/domain/interfaces/Item';
import { PizzaAddon } from 'src/app/domain/interfaces/PizzaAddon';
import { PizzaModifier } from 'src/app/domain/interfaces/PizzaModifier';
import { ItemRenderService } from 'src/app/data/item-render/item-render.service';

@Component({
  selector: 'app-item-render',
  templateUrl: './item-render.component.html',
  styleUrls: ['./item-render.component.css']
})
export class ItemRenderComponent { 
  pizzas: Item[] = []
  drinks: Item[] = []
  borders: PizzaAddon[] = []
  size: PizzaModifier[] = []

  constructor(private itemRenderService: ItemRenderService){
  }

  ngOnInit(){
    this.loadItems();
  }

  ngOnChanges(){
    this.loadItems();
  }

  @Input() categoryItem: CategoryItem = CategoryItem.Offers

  isOffer(): boolean{
    return (this.categoryItem == CategoryItem.Offers)
  }

  isWhole(): boolean{
    return (this.categoryItem == CategoryItem.Whole)
  }

  isHalf(): boolean{
    return (this.categoryItem == CategoryItem.Half)
  }

  isDrinks(): boolean{
    return (this.categoryItem == CategoryItem.Drinks)
  }

  loadItems(){
    console.log(this.categoryItem)
    
    if(this.isHalf() || this.isWhole()) this.loadPizzas();
    
    if(this.isDrinks()) this.loadDrinks();
    
    else this.loadOffers();
    
  }

  loadPizzas(){
    this.itemRenderService.getPizzas().subscribe({
      next: (response) => {
        this.pizzas = response,
        console.log(response)
      },
      error: () => {}
    })
  }

  loadDrinks(){
    this.itemRenderService.getDrinks().subscribe({
      next: (response) => {
        this.drinks = response
      },
      error: () => {}
    })
  }

  loadOffers(){
    this.itemRenderService.getOffers().subscribe({
      next: (response) => {
        this.pizzas = response,
        console.log(response)
      },
      error: () => {}
    })
  }

}
