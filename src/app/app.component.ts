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
      {
        route: '/agrupamento', shape: 'folder', text: 'Agrupamento de dados' ,
        children: [
          { route: '/media', shape: 'folder', text: 'Média', },
          { route: '/mediana', shape: 'folder', text: 'Mediana', },
          { route: '/moda', shape: 'folder', text: 'Moda', },
          { route: '/desvioPadrao', shape: 'folder', text: 'Desvio Padrão', },
          { route: '/variancia', shape: 'folder', text: 'Variância', },
        ]
      },
      {
        route: '/analiseCombinatoria', shape: 'folder', text: 'Análise Combinatória' ,
        children: [{
          route: '/analiseCombinatoria', shape: 'folder', text: 'Anagramas'
        }]
      }
    ]
  }
  title = 'Tabela Distribuição Online';

  year:number=new Date().getFullYear();
}
