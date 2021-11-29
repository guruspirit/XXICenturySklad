import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoodsComponent} from "./components/goods/goods.component";
import {OrderComponent} from "./components/order/order.component";

const routes: Routes = [
  {path:'',component:OrderComponent},
  {path:'goods', component:GoodsComponent},
  {path:'**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
