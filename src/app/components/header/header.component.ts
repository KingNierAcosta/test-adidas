import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderTopComponent } from "../header-top/header-top.component";
import { MainMenuComponent } from "../main-menu/main-menu.component";
import { AuxiliaryMenuComponent } from "../auxiliary-menu/auxiliary-menu.component";
import { RouterLink } from '@angular/router';
import { BtnIconFavoriteComponent } from "../btn-icon-favorite/btn-icon-favorite.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        HeaderTopComponent,
        MainMenuComponent,
        AuxiliaryMenuComponent,
        RouterLink,
        BtnIconFavoriteComponent
    ]
})
export class HeaderComponent { }
