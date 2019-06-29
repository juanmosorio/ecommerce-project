import { Injectable } from '@angular/core';
import { ProductDatasourceService } from './product-datasource.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {

  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSourceService: ProductDatasourceService) {
    this.dataSourceService.getProducts()
      .subscribe((response: any) =>{
        this.products = response['products']
        this.categories = response['products']
          .map(p => p.productLine)
          .filter((c, index, array) => array.indexOf(c) === index)
          .sort();
      });
  }

  getProducts(productLine: string = null): Product[] {
    return this.products
      .filter((product: Product) => productLine == null || product.productLine === productLine);
  }

  getCategories = (): string[] => this.categories;



}
