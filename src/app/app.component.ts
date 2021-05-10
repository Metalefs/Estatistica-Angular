import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LinkTrackerService } from './link-tracker.service';

import { cardFlip, fade, slideInOut, slider } from './animations';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LinkTrackerService],

  animations: [cardFlip, slider, fade, slideInOut]
})
export class AppComponent {
  linkRef: HTMLLinkElement;
  themes = [
    { name: 'Light', href: 'https://unpkg.com/clarity-ui/clarity-ui.min.css' },
    { name: 'Dark', href: 'https://unpkg.com/clarity-ui/clarity-ui-dark.min.css' }
  ];
  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object, public linkTracker: LinkTrackerService) {
    linkTracker.links = [
      {
        route: '/agrupamento', shape: 'folder', text: 'Agrupamento de dados' ,
        children: [
          { route: '/agrupamento/dados-agrupados', shape: 'folder', text: 'Tabela de agrupamento', },
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
    if (isPlatformBrowser(this.platformId)) {
      let theme = this.themes[0];
      try {
        const stored = localStorage.getItem('theme');
        if (stored) {
          theme = JSON.parse(stored);
        }
      } catch (e) {
        // Nothing to do
      }
      this.linkRef = this.document.createElement('link');
      this.linkRef.rel = 'stylesheet';
      this.linkRef.href = theme.href;
      this.document.querySelector('head').appendChild(this.linkRef);
    }
  }
  title = 'Estatística Online';

  year:number=new Date().getFullYear();

  prepareRoute(outlet: RouterOutlet) {
    try{
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    catch(ex){

    }
  }
  setTheme(theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
    this.linkRef.href = theme.href;
  }
}
