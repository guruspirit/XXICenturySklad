import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from '../../service/service.service'
import {Product} from "../../Model/product";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  goods:Product[]=[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getGoods()
      .subscribe(data=>{
        this.goods = data;
      })

  }
  edit(product:Product){
    localStorage.setItem("id",product.id.toString());
    this.router.navigate(["edit"]);
    //this.service.updateGoods(Product)
  }

}
