import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BtnIconFavoriteComponent } from "../btn-icon-favorite/btn-icon-favorite.component";
import { Router } from '@angular/router';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    BtnIconFavoriteComponent
  ]
})
export class ProductItemComponent {

  @Input() product!: IProduct;

  constructor(
    private router: Router
  ) { }

  goToProductDetails() {
    this.router.navigateByUrl(
      `/product/${this.product.Name.toLocaleLowerCase().replaceAll(' ', '-')}`,
      {
        state: {
          product: this.product
        }
      }
    );
  }

}
