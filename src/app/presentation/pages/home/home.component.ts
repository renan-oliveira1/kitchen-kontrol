import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  navigateHome(){
    this.router.navigate(['menu'])
  }

  navigateBill(){
    this.router.navigate(['bill'])
  }

  navigateOrder(){
    this.router.navigate(['order'])
  }

}
