import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from '../model/product-repository.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;

  constructor(private productsRespositoryService: ProductRepositoryService) {}

  ngOnInit() {
  }

  get products(): Product[] {    
    return this.productsRespositoryService.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    return this.productsRespositoryService.getCategories();
  }

  changeCategory(newCategory?: string ) {
    this.selectedCategory = newCategory;
  }

}
