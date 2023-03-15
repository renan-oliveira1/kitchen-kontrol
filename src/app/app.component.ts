import { Component } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitchen-kontrol';

  loading = true

  loadingComponent(){
    setTimeout(() => {
      this.loading = false;
    }, 1500);
    this.loading = true
  }


  constructor(private router: Router) {
    router.events.subscribe((event) => {
      console.log(event)
      if (event instanceof NavigationStart) this.loadingComponent();

      if (event instanceof NavigationEnd) this.loading = true;

      if (event instanceof NavigationCancel) this.loading = false;
      
      if (event instanceof NavigationError) this.loading = false;
    });
  }

  
}
