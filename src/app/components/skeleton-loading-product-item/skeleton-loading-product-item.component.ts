import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-loading-product-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skeleton-loading-product-item.component.html',
  styleUrl: './skeleton-loading-product-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonLoadingProductItemComponent { }
