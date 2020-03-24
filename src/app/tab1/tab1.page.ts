import { Component } from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {Router, NavigationExtras} from '@angular/router';
  import { from } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  products: Product[];

  constructor(private productService: ProductService, private router: Router) {
    this.products = this.productService.getProduct();
  }

  view(products: any): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(products)
      }
    };
    this.router.navigate(['/details'], extras);
  }

  changeStatus(pos: number): void {
    this.productService.changeStatus(pos);
  }

  newProduct(): void {
    this.router.navigate(['/new-product']);
  }

}
