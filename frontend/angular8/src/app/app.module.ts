import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsComponent } from './components/goods/goods.component';
import { OrderComponent } from './components/order/order.component';
import {FormsModule} from '@angular/forms'
import {ServiceService} from '../app/service/service.service'
import {HttpClientModule} from '@angular/common/http';
import { AddGoodsComponent } from './components/add-goods/add-goods.component'
@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    OrderComponent,
    AddGoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
