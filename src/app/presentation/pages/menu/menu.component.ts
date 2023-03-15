import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  loading = true

  ngOnInit(): void{
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}
