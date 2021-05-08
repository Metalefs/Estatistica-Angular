import { Component, Input, OnInit } from '@angular/core';
import { WikiSummary } from '../wiki.service';

@Component({
  selector: 'app-wiki-card',
  templateUrl: './wiki-card.component.html',
  styleUrls: ['./wiki-card.component.css']
})
export class WikiCardComponent implements OnInit {

  @Input() wiki:WikiSummary;
  constructor() { }

  ngOnInit(): void {
  }

}
