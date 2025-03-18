import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent
  ]
})
export class HomeComponent {}
