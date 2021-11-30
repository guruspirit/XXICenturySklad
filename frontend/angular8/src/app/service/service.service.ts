import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Goods} from "../Model/goods";
import {Order} from "../Model/order";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  UrlGoods= 'http://localhost:80/h2/goods'
  UrlOrder= 'http://localhost:80/h2/order'
  getGoods(){
    return this.http.get<Goods[]>(this.UrlGoods)
  }
  getOrder(){
    return this.http.get<Order[]>(this.UrlOrder)
  }
}
