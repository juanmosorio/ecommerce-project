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
  public productsPerPage = 12;
  public selectedPage = 1;

  constructor(private productsRespositoryService: ProductRepositoryService) {}

  ngOnInit() {
  }

  get products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.productsRespositoryService.getProducts(this.selectedCategory)
      .slice(pageIndex, (pageIndex + this.productsPerPage));
  }

  get categories(): string[] {
    return this.productsRespositoryService.getCategories();
  }

  changeCategory(newCategory?: string ) {
    this.selectedPage = 1;
    this.selectedCategory = newCategory;
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(this.productsRespositoryService.getProducts(this.selectedCategory)
        .length / this.productsPerPage)
    ).fill(0).map((x, i) => i + 1);
  }

  changePage(newNumber: number) {
    this.selectedPage = newNumber;
  }

}
