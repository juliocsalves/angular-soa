import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', 'home.responsive.component.css'],
  standalone: true,
  imports: [
    // MenuBarComponent,
    // MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent
  ]
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  item: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data = dataFake); // Apenas para verificar se está funcionando
    this.data = dataFake;
  }
}
