import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IColorDetail, IProduct } from '../../interfaces/product';
import { AccordionComponent } from "../../components/accordion/accordion.component";
import { RatingComponent } from "../../components/rating/rating.component";

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        AccordionComponent,
        RatingComponent
    ]
})
export class ProductDetailsComponent implements OnInit {

  product!: IProduct;
  colorSelected: IColorDetail | null = null;
  expandedAccordionIndex = 0;

  constructor(
    private router: Router
  ) {
    this.product = this.router.getCurrentNavigation()?.extras.state?.['product'];
  }

  ngOnInit(): void {
    this.colorSelected = this.product.Color_detail[0] || null;
  }



}
