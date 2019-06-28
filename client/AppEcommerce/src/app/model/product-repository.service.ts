import { Injectable } from '@angular/core';
import { ProductDatasourceService } from './product-datasource.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {

  private products: Product[] = [];

  constructor(private dataSourceService: ProductDatasourceService) {
    this.dataSourceService.getProducts()
      .subscribe((response: any) => this.products = response['products']);
  }

  getProducts = () => this.products;

}
