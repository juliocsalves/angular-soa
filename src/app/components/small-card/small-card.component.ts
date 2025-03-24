import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'], // ✅ Correção: "styleUrls" com "s"
  standalone: true
})
export class SmallCardComponent implements OnInit {

  @Input()
  Id:string = "0";

  @Input()
  photoCover: string = "";

  @Input()
  cardTitle: string = "";


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get('Id'))
    )
  }
}
