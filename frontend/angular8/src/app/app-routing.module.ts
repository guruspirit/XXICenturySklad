import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoodsComponent} from "./components/goods/goods.component";
import {OrderComponent} from "./components/order/order.component";
import {AddGoodsComponent} from "./components/goods/add-goods/add-goods.component";
import {EditProductComponent} from "./components/goods/edit-product/edit-product.component"
const routes: Routes = [
  {path:'order',component:OrderComponent},
  {path:'goods', component:GoodsComponent},
  {path:'addProduct',component:AddGoodsComponent},
  {path:'editProduct',component:EditProductComponent},
  {path:'**', redirectTo:'/order'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
