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
  public selectedVendor = null;
  public selectedScale = null;
  public productsPerPage = 12;
  public selectedPage = 1;

  constructor(private productsRespositoryService: ProductRepositoryService) {}

  ngOnInit() {
  }

  get products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.productsRespositoryService
      .getProducts(this.selectedCategory, this.selectedVendor, this.selectedScale)
      .slice(pageIndex, (pageIndex + this.productsPerPage));
  }

  get categories(): string[] {
    return this.productsRespositoryService.getCategories();
  }

  get scales(): string[] {
    return this.productsRespositoryService.getScales();
  }

  get vendors(): string[] {
    return this.productsRespositoryService.getVendors();
  }

  changeCategory(newCategory?: string ) {
    this.clearCVS();
    this.selectedCategory = newCategory;
  }

  changeVendor(newVendor?: string) {
    this.clearCVS();
    this.selectedVendor = newVendor;
  }

  changeScale(newScale?: string) {
    this.clearCVS();
    this.selectedScale = newScale;
  }

  clearCVS() {
    this.selectedPage = 1;
    this.selectedCategory = null;
    this.selectedVendor = null;
    this.selectedScale = null;
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(this.productsRespositoryService
        .getProducts(this.selectedCategory, this.selectedVendor, this.selectedScale)
        .length / this.productsPerPage)
    ).fill(0).map((x, i) => i + 1);
  }

  changePage(newNumber: number) {
    this.selectedPage = newNumber;
  }

}
