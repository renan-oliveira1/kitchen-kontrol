import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CategoryItem } from 'src/app/core/CategoryItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() navCategoryItem: EventEmitter<any> = new EventEmitter();

  categoryOffer: CategoryItem.Offers = CategoryItem.Offers

  handleClick(){
    this.navCategoryItem.emit();
    console.log('chegou no handle click')
  }

}
