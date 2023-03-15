import { Component, Input } from '@angular/core';
import { CategoryItem } from 'src/app/core/CategoryItem';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  currentCategoryItem: CategoryItem = CategoryItem.Offers

  isOffer(): boolean{
    return (this.currentCategoryItem == CategoryItem.Offers)
  }

  isWhole(): boolean{
    return (this.currentCategoryItem == CategoryItem.Whole)
  }

  isHalf(): boolean{
    return (this.currentCategoryItem == CategoryItem.Half)
  }

  isDrinks(): boolean{
    return (this.currentCategoryItem == CategoryItem.Drinks)
  }

  ngOnInit(): void{
   
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

}
