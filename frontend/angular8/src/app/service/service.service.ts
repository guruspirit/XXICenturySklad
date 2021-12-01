import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../Model/product";
import {Order} from "../Model/order";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  UrlGoods= 'http://localhost:80/h2/goods'
  UrlOrder= 'http://localhost:80/h2/order'
  getGoods(){
    return this.http.get<Product[]>(this.UrlGoods)
  }
  getOrder(){
    return this.http.get<Order[]>(this.UrlOrder)
  }
  getProductId(id:Number){
    return this.http.get<Product>(this.UrlGoods+"/"+id);
  }
  addProduct(product:Product){
    return this.http.post<Product>(this.UrlGoods,product);
  }
  updateGoods(product:Product){
    return this.http.post<Product>(this.UrlGoods+"/"+product.id,product);
  }
}
