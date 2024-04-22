import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchComponent { }
