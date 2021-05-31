import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WikiSummary, WikiService } from 'src/app/shared/wiki.service';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'app-combinacao',
  templateUrl: './combinacao.component.html',
  styleUrls: ['./combinacao.component.css']
})
export class CombinacaoComponent implements OnInit {

  Combinacao:string;
  values:number;
  group:string[];
  dadosForm: FormGroup;
  public wiki:WikiSummary = {extract_html:`<p>A <b>combinatória</b> é um ramo da matemática que estuda coleções finitas de elementos que satisfazem critérios específicos determinados e se preocupa, em particular, com a "contagem" de elementos nessas coleções, com decidir se certo objeto "ótimo" existe e com estruturas "algébricas" que esses objetos possam ter.</p>`};
  constructor( protected wikiService: WikiService, private fb:FormBuilder, private analiseService: AnaliseService) {

  }
  ngOnInit(): void {
    this.dadosForm = this.fb.group({
      values:[this.values,[Validators.required]],
      group:[this.group,[Validators.required]],
    })
    this.Combinacao = JSON.parse(localStorage.getItem('last_Combinacao_result'));
    this.values = JSON.parse(localStorage.getItem('last_Combinacao_search'));
    this.getWikiSummary("Combinação");
  }

  calcular(valor){
    this.analiseService.getFatorial(valor).subscribe(results=>{
      if(results.erro){
        window.alert(results.erro);
        return;
      }
      this.Combinacao = JSON.parse(results.retorno);
      localStorage.setItem("last_Combinacao_result",JSON.stringify(this.Combinacao));
      localStorage.setItem("last_Combinacao_search",JSON.stringify(valor));
    })
  }

  getCombinacao(valor, combinacao){
    this.Combinacao = this.analiseService.getCombinacaoLocal(valor,combinacao).toString();
    return this.Combinacao;
  }

  getWikiSummary(search:string){
    return this.wikiService.getWikiPage(search).subscribe(result=>this.wiki=result);
  }

}
