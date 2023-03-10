import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './presentation/features/menu/menu.component';
import { KitchenComponent } from './presentation/features/kitchen/kitchen.component';
import { BillComponent } from './presentation/features/bill/bill.component';
import { ManagerComponent } from './presentation/features/manager/manager.component';
import { HomeComponent } from './presentation/features/home/home.component';
import { OrderPipelineComponent } from './presentation/features/order-pipeline/order-pipeline.component';

const routes: Routes = [
  {path: 'order', component: OrderPipelineComponent},
  {path: 'home', component: HomeComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'bill', component: BillComponent},
  {path: 'kitchen', component: KitchenComponent},
  {path: 'menu', component: MenuComponent},
  {path: '', redirectTo:'menu', pathMatch:'full' },
  {path: '**', redirectTo:'menu', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
