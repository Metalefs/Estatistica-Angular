import { Injectable } from '@angular/core';
import { WikiSummary } from './wiki.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects:project[] = [
    {header:'Permutação',class:"permutation",name:'Anagrama', description:'Transpor letras de uma palavra', link:'/analiseCombinatoria/anagramas', wiki:null},
    {header:'Permutação',class:"permutation",name:'Fatorial', description:'Obter o fatorial de um número', link:'/analiseCombinatoria/fatorial', wiki:null},
    {header:'Permutação',class:"permutation",name:'Combinação', description:'Obter Combinação de um número', link:'/analiseCombinatoria/combinacao', wiki:null},
    {header:'Distribuição de dados',class:"grouping",name:'Distribuição de frequências', description:'Gerar tabela de distribuição de frequência', link:'/agrupamento/dados-agrupados', wiki:null},
    {header:'Distribuição de dados',class:"grouping",name:'Moda (estatística)', description:'Obter o elemento mais frequente em uma lista', link:'/agrupamento/moda', wiki:null},
    {header:'Distribuição de dados',class:"grouping",name:'Média', description:'Calcular o valor médio entre elemetos', link:'/agrupamento/media', wiki:null},
    {header:'Distribuição de dados',class:"grouping",name:'Mediana (estatística)', description:'Obter o elemento central de uma lista', link:'/agrupamento/mediana', wiki:null},
    {header:'Distribuição de dados',class:"grouping",name:'Variância', description:'Obter a variação de valores', link:'/agrupamento/variancia', wiki:null},
    {header:'Distribuição de dados',class:"grouping",name:'Desvio Padrão', description:'Obter o grau de dispersão de um conjunto de dados', link:'/agrupamento/desvioPadrao', wiki:null},
    {header:'Distribuição de dados',class:"grouping",name:'Coeficiênte de Variação', description:'Obter o grau de dispersão de um conjunto de dados', link:'/agrupamento/coeficienteVariacao', wiki:null},
  ]
}

export interface project {
  header:string,
  name:string,
  class?:string,
  description:string,
  wiki:WikiSummary,
  link:string,
}
