import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {

  @Input() rating: number = 0;
  @Input() successClass: string = 'text-green-400';
  @Input() failedClass: string = 'text-gray-300 ';
}
