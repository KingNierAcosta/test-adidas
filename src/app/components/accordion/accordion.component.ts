import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { RatingComponent } from "../rating/rating.component";
import { SplitPipe } from "../../pipes/split.pipe";

@Component({
    selector: 'app-accordion',
    standalone: true,
    templateUrl: './accordion.component.html',
    styleUrl: './accordion.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RatingComponent,
        SplitPipe
    ]
})
export class AccordionComponent {

  @Input() expandedAccordionIndex = 0;
  @Input() product!: IProduct;
}
