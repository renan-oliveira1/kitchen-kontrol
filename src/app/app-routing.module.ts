import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './presentation/pages/menu/menu.component';
import { KitchenComponent } from './presentation/pages/kitchen/kitchen.component';
import { BillComponent } from './presentation/pages/bill/bill.component';
import { ManagerComponent } from './presentation/pages/manager/manager.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { OrderPipelineComponent } from './presentation/pages/order-pipeline/order-pipeline.component';
import { WaiterComponent } from './presentation/pages/waiter/waiter.component';
import { MenuItemsComponent } from './presentation/pages/menu-items/menu-items.component';

const routes: Routes = [
  {path: 'order', component: OrderPipelineComponent},
  {path: 'waiter', component: WaiterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'bill', component: BillComponent},
  {path: 'kitchen', component: KitchenComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'cardapio', component: MenuItemsComponent},
  {path: '', redirectTo:'menu', pathMatch:'full' },
  {path: '**', redirectTo:'menu', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
