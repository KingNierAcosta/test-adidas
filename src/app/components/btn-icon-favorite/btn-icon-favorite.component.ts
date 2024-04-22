import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-btn-icon-favorite',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './btn-icon-favorite.component.html',
  styleUrl: './btn-icon-favorite.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnIconFavoriteComponent { }
