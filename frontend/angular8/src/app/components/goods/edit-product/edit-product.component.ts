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

  product!:Product;
  ngOnInit(): void {
    //this.edit();
  }

  edit(){
    alert('start edit');
    let id = Number(localStorage.getItem("id"));
    this.service.getProductId(id)
      .subscribe(data=>{
        this.product = data;
      }
    )
  }

}
