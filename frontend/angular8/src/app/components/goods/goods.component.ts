import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from '../../service/service.service'
import {Goods} from "../../Model/goods";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  goods:Goods[]=[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getGoods()
      .subscribe(data=>{
        this.goods = data;
      })

  }

}
