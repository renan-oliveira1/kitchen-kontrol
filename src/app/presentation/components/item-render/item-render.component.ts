import { Component, Input, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/core/CategoryItem';
import { ItemRenderService } from 'src/app/data/item-render/item-render.service';
import { Addon } from 'src/app/domain/interfaces/Addon';
import { ItemCardapio } from 'src/app/domain/interfaces/ItemCardapio';
import { Size } from 'src/app/domain/interfaces/PizzaModifier';

@Component({
  selector: 'app-item-render',
  templateUrl: './item-render.component.html',
  styleUrls: ['./item-render.component.css']
})
export class ItemRenderComponent { 
  pizzas: ItemCardapio[] = []
  drinks: ItemCardapio[] = []
  offers: ItemCardapio[] = []
  borders: Addon[] = []
  sizes: Size[] = []

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
    
    else if(this.isDrinks()) this.loadDrinks();
    
    else this.loadOffers();
    
  }

  loadPizzas(){
    this.itemRenderService.getCardapio().subscribe({
      next: (response) => {
        this.pizzas = response.filter((obj) => 
        obj.itemType === 'PIZZA'
        )
        console.log(this.pizzas)      
      },
      error: () => {}
    })
  }

  loadDrinks(){
    this.itemRenderService.getCardapio().subscribe({
      next: (response) => {
        this.drinks = response.filter((obj) => 
        obj.itemType === 'DRINK'          
      )
      console.log(this.drinks)
      },
      error: () => {}
    })
  }

  loadOffers(){
    this.itemRenderService.getOffers().subscribe({
      next: (response) => {
        this.offers = response,
        console.log(response)
      },
      error: () => {}
    })
  }

}
