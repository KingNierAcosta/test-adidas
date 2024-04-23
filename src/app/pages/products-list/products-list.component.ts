import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ProductItemComponent } from "../../components/product-item/product-item.component";
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { finalize, take } from 'rxjs';
import { SkeletonLoadingProductItemComponent } from "../../components/skeleton-loading-product-item/skeleton-loading-product-item.component";

@Component({
    selector: 'app-products-list',
    standalone: true,
    templateUrl: './products-list.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ProductItemComponent,
        SkeletonLoadingProductItemComponent
    ]
})
export class ProductsListComponent implements OnInit {

  products = signal<IProduct[]>([]);
  loading = signal<boolean>(true);

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .pipe(
        take(1),
        finalize(() => this.loading.set(false))
      )
      .subscribe((products) => this.products.set(products));
  }


}
