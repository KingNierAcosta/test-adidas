import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputSearchComponent } from "../input-search/input-search.component";

@Component({
    selector: 'app-auxiliary-menu',
    standalone: true,
    templateUrl: './auxiliary-menu.component.html',
    styleUrl: './auxiliary-menu.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        InputSearchComponent
    ]
})
export class AuxiliaryMenuComponent {
}
