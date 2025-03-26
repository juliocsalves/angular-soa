import { CommonModule } from '@angular/common';
import { Component, Input, OnInit,  } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', 'big-card.responsive.component.css'],
  standalone: true
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string = "";

  @Input()
  cardTittle: string = "";

  @Input()
  cardDescription: string = "";

  @Input()
  Id: string = "0";

  constructor() {

  }

  ngOnInit(): void {

  }
}
