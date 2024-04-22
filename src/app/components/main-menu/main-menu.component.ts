import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderItem } from '../../interfaces/header-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent {

  items: HeaderItem[] = [
    {
      name: 'Men',
      link: '',
      className: 'font-bold'
    },
    {
      name: 'Women',
      link: '',
      className: 'font-bold'
    },
    {
      name: 'Kids',
      link: '',
      className: 'font-bold'
    },
    {
      name: 'Sale',
      link: '',
    },
    {
      name: '3 STRIPE LIFE',
      link: '',
    }
  ]
}
