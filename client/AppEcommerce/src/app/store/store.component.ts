import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from '../model/product-repository.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private productsRespositoryService: ProductRepositoryService) {}

  ngOnInit() {
    // console.log(this.getProducts());
    this.getProducts();
  }

  getProducts(): Product[] {    
    return this.productsRespositoryService.getProducts();
  }

}
