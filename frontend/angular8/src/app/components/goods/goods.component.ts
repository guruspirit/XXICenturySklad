import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from '../../service/service.service'
import {Product} from "../../Model/product";
import {AppComponent} from "../../app.component";
import {EditProductComponent} from "./edit-product/edit-product.component";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  goods!:Product[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getGoods()
      .subscribe(data=>{
        this.goods = data;
      })
    //alert("Updated");
  }
  edit(product:Product){
    localStorage.setItem("id",product.id.toString());
    this.router.navigate(["editProduct"]);
//    this.service.updateGoods(product);
  }
  delete(product:Product){
    localStorage.setItem("id",product.id.toString());
    this.router.navigate(["deleteProduct"]);
  }

}
