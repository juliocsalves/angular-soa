import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'], // ✅ Correção: "styleUrls" com "s"
  standalone: true
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: string = "https://tm.ibxk.com.br/2021/02/03/03151242518008.jpg";

  @Input()
  cardTitle: string = "Jax mata Clay e mostra que tem faca na bota...";

  constructor() {}

  ngOnInit(): void {}
}
