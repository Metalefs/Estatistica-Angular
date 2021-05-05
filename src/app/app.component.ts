import { Component } from '@angular/core';
import { LinkTrackerService } from './link-tracker.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LinkTrackerService]
})
export class AppComponent {
  constructor(public linkTracker: LinkTrackerService) {
    linkTracker.links = [
      { route: '/TabelaAgrupamento', shape: 'folder', text: 'Agrupamento de dados' },
      { route: '/AnaliseCombinatoria', shape: 'folder', text: 'Análise Combinatória' , children: [{
        route: '/AnaliseCombinatoria', shape: 'folder', text: 'Anagramas'
      }]}
    ]
  }
  title = 'Tabela Distribuição Online';

  year:number=new Date().getFullYear();
}
