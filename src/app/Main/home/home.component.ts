import { Component, OnInit } from '@angular/core';
import { WikiService, WikiSummary } from '../../shared/wiki.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects:project[];
  constructor(private homeService:WikiService) { }

  ngOnInit(): void {
    this.projects = [
      {header:'Permutação', name:'Anagramas', description:'Transpor letras de uma palavra', link:'/analiseCombinatoria/anagramas', wiki:null},
      {header:'Distribuição de dados', name:'Tabela de distribuição de frequência', description:'Gerar tabela de distribuição de frequência', link:'/agrupamento/dados-agrupados', wiki:null},
      {header:'Distribuição de dados', name:'Variância', description:'Obter a variação de valores', link:'/agrupamento/variancia', wiki:null},
      {header:'Distribuição de dados', name:'Moda (estatística)', description:'Obter o elemento mais frequente em uma lista', link:'/agrupamento/mediana', wiki:null},
      {header:'Distribuição de dados', name:'Média', description:'Calcular o valor médio entre elemetos', link:'/agrupamento/media', wiki:null},
      {header:'Distribuição de dados', name:'Mediana (estatística)', description:'Obter o elemento central de uma lista', link:'/agrupamento/moda', wiki:null},
      {header:'Distribuição de dados', name:'Desvio Padrão', description:'Obter o grau de dispersão de um conjunto de dados', link:'/agrupamento/desvioPadrao', wiki:null},
    ]

    this.projects.forEach(proj=>{
      this.obterDescricaoWikipedia(proj);
    })
  }

  obterDescricaoWikipedia(project:project){
    return this.homeService.getWikiPage(project.name).subscribe(result => {project.wiki = result;});
  }
}

export interface project {
  header:string,
  name:string,
  description:string,
  wiki:WikiSummary,
  link:string,
}
