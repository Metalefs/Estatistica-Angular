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
          { route: '/agrupamento/dados-agrupados', shape: 'folder', text: 'Dados Agrupados', },
          { route: '/agrupamento/media', shape: 'folder', text: 'Média', },
          { route: '/agrupamento/mediana', shape: 'folder', text: 'Mediana', },
          { route: '/agrupamento/moda', shape: 'folder', text: 'Moda', },
          { route: '/agrupamento/desvioPadrao', shape: 'folder', text: 'Desvio Padrão', },
          { route: '/agrupamento/variancia', shape: 'folder', text: 'Variância', },
          { route: '/agrupamento/coeficienteVariacao', shape: 'folder', text: 'Coeficiênte de Variação', },
        ]
      },
      {
        route: '/analiseCombinatoria', shape: 'folder', text: 'Análise Combinatória' ,
        children: [{
          route: '/analiseCombinatoria/anagramas', shape: 'folder', text: 'Anagramas'
        }]
      }
    ]
  }
  title = 'Estatística Online';

  year:number=new Date().getFullYear();
}
