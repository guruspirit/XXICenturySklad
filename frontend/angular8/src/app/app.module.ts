import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsComponent } from './components/goods/goods.component';
import {AddGoodsComponent} from './components/goods/add-goods/add-goods.component'
import { OrderComponent } from './components/order/order.component';
import {FormsModule} from '@angular/forms'
import {ServiceService} from '../app/service/service.service'
import {HttpClientModule} from '@angular/common/http';
import { EditProductComponent } from './components/goods/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    OrderComponent,
    AddGoodsComponent,
    EditProductComponent
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
