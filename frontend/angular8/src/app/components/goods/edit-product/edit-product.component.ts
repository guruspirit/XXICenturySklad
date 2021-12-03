import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../../service/service.service";
import {Router} from "@angular/router";
import {Product} from "../../../Model/product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }

  product:Product = new Product(0,"no",0);
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    let id = Number(localStorage.getItem("id"));
    this.service.getProductId(id)
      .subscribe(data=>{
        this.product = data;
      }
    )
  }

  update(){
    this.service.updateProduct(this.product)
      .subscribe(data=>{
      this.product=data;
      //alert("Обновление выполнено успешно");
    })
    this.router.navigate(["goods"]);
  }

}
