import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { CategoryItem } from 'src/app/core/CategoryItem';
import { ItemRenderService } from 'src/app/data/item-render/item-render.service';
import { ItemCardapioImp } from 'src/app/domain/items/itemCardapioImp';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent {

  constructor(private itemService : ItemRenderService){}

  itemCardapio: ItemCardapioImp = new ItemCardapioImp('', '', 0, 'PIZZA', 'VISIBLE');

  currentCategoryItem: CategoryItem = CategoryItem.Whole
  reloadRender : boolean = false

  isOffer(): boolean{
    return (this.currentCategoryItem == CategoryItem.Offers)
  }

  isWhole(): boolean{
    return (this.currentCategoryItem == CategoryItem.Whole)
  }

  isDrinks(): boolean{
    return (this.currentCategoryItem == CategoryItem.Drinks)
  }

  resetForm(): void{
    this.itemCardapio = new ItemCardapioImp('', '', 0, 'PIZZA', 'VISIBLE');
    this.reloadRender = !this.reloadRender;
  }

  changeToDrinks(){
    this.currentCategoryItem = CategoryItem.Drinks
  }

  changeToHalf(){
    this.currentCategoryItem = CategoryItem.Half
  }

  changeToWhole(){
    this.currentCategoryItem = CategoryItem.Whole
  }

  changeToOffers(){
    this.currentCategoryItem = CategoryItem.Offers
  }

  adicionarItem(){
    if(this.isWhole()) {
      this.itemCardapio.itemType = 'PIZZA'
    }
    else {
      this.itemCardapio.itemType = 'DRINK'
    }
    
    this.itemService.postItem(this.itemCardapio)
  .pipe(
    switchMap(async () => this.resetForm())
  )
  .subscribe(() => {
    
  });
  }


}
