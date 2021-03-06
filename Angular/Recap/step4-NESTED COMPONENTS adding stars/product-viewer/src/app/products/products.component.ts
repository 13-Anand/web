import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  pageTitle = '';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

  // tslint:disable-next-line:no-inferrable-types variable-name
  _listFilter: string = 'book';
  get listFilter(): string {
    console.log('get listFilter' + this._listFilter);
    return this._listFilter;
  }
  set listFilter(value: string) {
    console.log('set listFilter' + this._listFilter);
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'ng-book',
      price: 19.95,
      starRating: 3.2,
      image: '/assets/images/ngbook.jpg'
      // "image": "/assets/images/angular.png"
    },
    {
      productId: 2,
      productName: 'pRo anGular',
      price: 32.99,
      starRating: 4.2,
      image: '/assets/images/proangular.jpg'
    },
    {
      productId: 3,
      productName: 'Angular',
      price: 32.99,
      starRating: 4.5,
      image: '/assets/images/angular.png'
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = '';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
