import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsComponent } from './components/goods/goods.component';
import { OrderComponent } from './components/order/order.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { RemoveOrderComponent } from './components/remove-order/remove-order.component';
import { GetOrdersComponent } from './components/get-orders/get-orders.component';
import { GetOrderByIdComponent } from './components/get-order-by-id/get-order-by-id.component';
import { EditGoodsComponent } from './components/edit-goods/edit-goods.component';
import { RemoveGoodsComponent } from './components/remove-goods/remove-goods.component';
import { GetGoodsComponent } from './components/get-goods/get-goods.component';
import { GetGoodsByIdComponent } from './components/get-goods-by-id/get-goods-by-id.component';


@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    OrderComponent,
    EditOrderComponent,
    RemoveOrderComponent,
    GetOrdersComponent,
    GetOrderByIdComponent,
    EditGoodsComponent,
    RemoveGoodsComponent,
    GetGoodsComponent,
    GetGoodsByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
