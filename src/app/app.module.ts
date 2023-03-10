import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/menu/categories/categories.component';
import { OfferComponent } from './components/menu/offer/offer.component';
import { ItemCardComponent } from './components/menu/item-card/item-card.component';
import { ItemOrderComponent } from './components/menu/item-order/item-order.component';
import { BillComponent } from './components/bill/bill.component';
import { OrderPipelineComponent } from './components/order-pipeline/order-pipeline.component';
import { ManagerComponent } from './components/manager/manager.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { OrderComponent } from './components/kitchen/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    CategoriesComponent,
    OfferComponent,
    ItemCardComponent,
    ItemOrderComponent,
    BillComponent,
    OrderPipelineComponent,
    ManagerComponent,
    KitchenComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
