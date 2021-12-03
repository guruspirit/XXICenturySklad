import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import {Product} from 'src/app/Model/product'

@Component({
  selector: 'app-add-goods',
  templateUrl: './add-goods.component.html',
  styleUrls: ['./add-goods.component.css']
})
export class AddGoodsComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  save(name:string,price:string){

    this.service.addProduct(new Product(-1,name,Number(price)))
    .subscribe(data=>{
      alert("Новый продукт успешно добавлен");
      this.router.navigate(["addProduct"]);
    })
  }

}
