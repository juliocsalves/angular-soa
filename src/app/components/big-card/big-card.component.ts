import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
  standalone: true
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string = "";

  @Input()
  cardTittle: string = "";

  @Input()
  cardDescription: string = "";

  constructor() {

  }

  ngOnInit(): void {

  }
}
