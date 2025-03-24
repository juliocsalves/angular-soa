import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'] // ✅ Correção aqui (styleUrls no plural)
})
export class ContentComponent implements OnInit {
  private id: string | null = "0";
  photocover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';


  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    );

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(
      article => article.id.toString() == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photocover = result.photo;
  }

}

