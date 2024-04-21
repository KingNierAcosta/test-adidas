import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderItem } from '../../interfaces/header-item';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header-top.component.html',
  styleUrl: './header-top.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderTopComponent {

  items: HeaderItem[] = [
    {
      name: 'help',
      link: ''
    }, {
      name: 'orders and returns',
      link: ''
    }, {
      name: 'join adiClub',
      link: ''
    }
  ]
}
