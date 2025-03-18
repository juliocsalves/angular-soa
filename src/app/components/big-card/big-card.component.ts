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
  photoCover: string = "https://images.mubicdn.net/images/film/184442/cache-269638-1534418507/image-w1280.jpg?";

  @Input()
  cardTittle: string = "Sons of Anarchy";

  @Input()
  cardDescription: string = "Um homem na casa dos 30 anos luta para encontrar um equilíbrio em sua vida entre ser um novo pai e seu envolvimento em um clube de motociclistas 1%.";

  constructor() {

  }

  ngOnInit(): void {

  }
}
