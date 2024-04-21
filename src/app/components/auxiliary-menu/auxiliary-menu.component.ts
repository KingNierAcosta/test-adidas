import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputSearchComponent } from "../input-search/input-search.component";
import { BtnIconFavoriteComponent } from "../btn-icon-favorite/btn-icon-favorite.component";

@Component({
  selector: 'app-auxiliary-menu',
  standalone: true,
  templateUrl: './auxiliary-menu.component.html',
  styleUrl: './auxiliary-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    InputSearchComponent,
    BtnIconFavoriteComponent
  ]
})
export class AuxiliaryMenuComponent {
}
