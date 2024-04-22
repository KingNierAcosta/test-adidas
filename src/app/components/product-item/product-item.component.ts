import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnIconFavoriteComponent } from "../btn-icon-favorite/btn-icon-favorite.component";

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
export class ProductItemComponent { }
