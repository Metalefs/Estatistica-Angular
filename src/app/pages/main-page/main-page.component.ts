import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../../api/RestApiService';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  api:RestApiService;
  title = "Distribuição online";

  desktop = "is-hidden-touch";
  mobile = "is-hidden-desktop";

  constructor(api:RestApiService) {
    this.api = api;
  }

  ngOnInit(){}

}
