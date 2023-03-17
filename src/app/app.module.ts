import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { NavbarComponent } from './presentation/components/navbar/navbar.component';
import { MenuComponent } from './presentation/pages/menu/menu.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { CategoriesComponent } from './presentation/components/categories/categories.component';
import { ItemCardComponent } from './presentation/components/item-card/item-card.component';
import { ItemOrderComponent } from './presentation/components/item-order/item-order.component';
import { BillComponent } from './presentation/pages/bill/bill.component';
import { OrderPipelineComponent } from './presentation/pages/order-pipeline/order-pipeline.component';
import { ManagerComponent } from './presentation/pages/manager/manager.component';
import { KitchenComponent } from './presentation/pages/kitchen/kitchen.component';
import { OrderComponent } from './presentation/components/order/order.component';
import { LoadingScreenComponent } from './presentation/components/loading-screen/loading-screen.component';
import { ItemRenderComponent } from './presentation/components/item-render/item-render.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    CategoriesComponent,
    ItemCardComponent,
    ItemOrderComponent, 
    BillComponent,
    OrderPipelineComponent,
    ManagerComponent,
    KitchenComponent,
    OrderComponent,
    LoadingScreenComponent,
    ItemRenderComponent
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
