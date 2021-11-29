import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Goods} from "../Model/goods";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url= 'http://localhost:8080/goods'
  getGoods(){
    return this.http.get<Goods[]>(this.Url)
  }
}
