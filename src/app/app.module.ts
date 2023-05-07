import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { NavbarComponent } from './presentation/components/navbar/navbar.component';
import { MenuComponent } from './presentation/pages/menu/menu.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { CategoriesComponent } from './presentation/components/categories/categories.component';
import { ItemCardComponent } from './presentation/components/item-card/item-card.component';
import { BillComponent } from './presentation/pages/bill/bill.component';
import { OrderPipelineComponent } from './presentation/pages/order-pipeline/order-pipeline.component';
import { ManagerComponent } from './presentation/pages/manager/manager.component';
import { KitchenComponent } from './presentation/pages/kitchen/kitchen.component';
import { LoadingScreenComponent } from './presentation/components/loading-screen/loading-screen.component';
import { ItemRenderComponent } from './presentation/components/item-render/item-render.component';
import { ModalComponent } from './presentation/components/modal/modal.component';
import { WaiterComponent } from './presentation/pages/waiter/waiter.component';
import { DeliveredDialogComponent } from './presentation/components/delivered-dialog/delivered-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    CategoriesComponent,
    ItemCardComponent,
    BillComponent,
    OrderPipelineComponent,
    ManagerComponent,
    KitchenComponent,
    LoadingScreenComponent,
    ItemRenderComponent,
    ModalComponent,
    WaiterComponent,
    DeliveredDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
