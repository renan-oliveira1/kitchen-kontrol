import { Component} from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ItemRenderService } from 'src/app/data/item-render/item-render.service';
import { PizzaAddonRenderService } from 'src/app/data/pizza-addon/pizza-addon-render.service';
import { PizzaModifierRenderService } from 'src/app/data/pizza-modifier/pizza-modifier-render.service';
import { OnInit } from '@angular/core';
import { Addon } from 'src/app/domain/interfaces/Addon';
import { Drink } from 'src/app/domain/interfaces/Drink';
import { ItemCardapio } from 'src/app/domain/interfaces/ItemCardapio';
import { Pizza } from 'src/app/domain/interfaces/Pizza';
import { Size } from 'src/app/domain/interfaces/PizzaModifier';
import { Table } from 'src/app/domain/interfaces/Table';
import { OrderItemsService } from 'src/app/data/order-items/order-items.service';
import { PizzaInput } from 'src/app/domain/items/Pizza';
import { DrinkInput } from 'src/app/domain/items/Drink';


@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  pizzaAddons: Addon[] = [];
  pizzaSizes: Size[] = [];
  drinks: ItemCardapio[] = [];
  pizzas: ItemCardapio[] = [];

  // To build the order (In addition to the item, itemType, and table inside "data.")
  pizzaOrder!: Pizza;
  drinkOrder!: Drink;
  selectedSize!: Size;
  selectedAddons: Addon[] = [];
  otherItem!: ItemCardapio;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      item: ItemCardapio,
      itemType: string,
      table: Table
    },
    private pizzaAddonService: PizzaAddonRenderService,
    private pizzaSizeService: PizzaModifierRenderService,
    private itemService: ItemRenderService,
    private orderService: OrderItemsService
  ) {}

  ngOnInit() {
    this.loadPizzaAddons();
    this.loadSizes();
    this.loadItems();
  }

  loadPizzaAddons() {
    this.pizzaAddonService.getAddons().subscribe({
      next: (response) => {
        this.pizzaAddons = response;
        console.log('pizzaAddons', this.pizzaAddons);
      },
      error: () => {}
    });
  }

  loadSizes() {
    this.pizzaSizeService.getSizes().subscribe({
      next: (response) => {
        this.pizzaSizes = response;
        console.log('sizes', this.pizzaSizes);
      },
      error: () => {}
    });
  }

  loadItems() {
    this.itemService.getCardapio().subscribe({
      next: (response) => {
        this.pizzas = response.filter((item) => item.itemType === 'PIZZA');
        this.drinks = response.filter((item) => item.itemType === 'DRINK');
        console.log('itemPizzas', this.pizzas);
        console.log('itemDrinks', this.drinks);
        console.log('table', this.data.table);
      },
      error: () => {}
    });
  }

  //constroi uma requisição
  buildOrder() {
    if(this.data.item.itemType == 'PIZZA'){
      const newPizzaOrder = new PizzaInput(null, this.calculateFinalPrice(), [this.data.item], this.selectedAddons, this.selectedSize, 'REQUESTED', 1);
      //add this.pizzaService.insert(newPizzaOrder)
    }
    else{
      const newDrinkOrder = new DrinkInput(null, this.calculateFinalPrice(), 1, this.data.item, true, 'REQUESTED');
      //add this.drinkService.insert(newDrinkOrder)
    }

  }
  
  //fazer um checkbox (estou permitindo vários addons, mas caso queiram mudar é só mexer nessa lógica)
  handleCkeckBoxAddon(addon : Addon){
    if(this.selectedAddons.length == 0){
      this.selectedAddons.push(addon)
    }
    else{
      this.selectedAddons.filter(item => item !== addon);
    }
  }
  //fazer um dropdown sla...
  handleSizeSelection(size : Size){
    this.selectedSize = size
  }

  calculateFinalPrice(){
    return (this.data.item.basePrice * this.selectedSize.multiplier) + this.selectedAddons[0].price
  }
}



