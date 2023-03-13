import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitchen-kontrol';

  loading = true

  ngOnInit(): void{
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}
