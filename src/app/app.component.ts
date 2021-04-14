import { Component } from '@angular/core';
import { LinkTrackerService } from './link-tracker.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LinkTrackerService]
})
export class AppComponent {
  constructor(public linkTracker: LinkTrackerService) {}
  title = 'Tabela Distribuição Online';
  nav_elements: NAV_ELEMENT[] = [
    {name: "Tabela de Agrupamento",link: "/TabelaAgrupamento"},
  ];
  year:number=new Date().getFullYear();
}
interface NAV_ELEMENT {
  name: string;
  link: string;
}
