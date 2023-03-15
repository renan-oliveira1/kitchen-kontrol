import { Component, Input } from '@angular/core';
import { CategoryItem } from 'src/app/core/CategoryItem';

@Component({
  selector: 'app-item-render',
  templateUrl: './item-render.component.html',
  styleUrls: ['./item-render.component.css']
})
export class ItemRenderComponent {
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

}
