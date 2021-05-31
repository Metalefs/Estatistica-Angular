import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WikiSummary, WikiService } from 'src/app/shared/wiki.service';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'app-arranjo',
  templateUrl: './arranjo.component.html',
  styleUrls: ['./arranjo.component.css']
})
export class ArranjoComponent implements OnInit {

  Arranjo:string;
  values:number;
  group:string[];
  dadosForm: FormGroup;
  public wiki:WikiSummary = {extract_html:"<p>Um <b>anagrama</b> é uma espécie de jogo de palavras criado com a reorganização das letras de uma palavra ou expressão para produzir outras palavras ou expressões, utilizando todas as letras originais exatamente uma vez. Exemplos amplamente conhecidos são Iracema e América e amor e Roma. Outro exemplo é o prenome da escritora brasileira Nélida Piñón, anagrama do prenome de seu avô materno Daniel Cuiñas.</p>"};
  constructor( protected wikiService: WikiService, private fb:FormBuilder, private analiseService: AnaliseService) {

  }
  ngOnInit(): void {
    this.dadosForm = this.fb.group({
      values:[this.values,[Validators.required]],
      group:[this.group,[Validators.required]],
    })
    this.Arranjo = JSON.parse(localStorage.getItem('last_Arranjo_result'));
    this.values = JSON.parse(localStorage.getItem('last_Arranjo_search'));
    this.getWikiSummary("Arranjo (matemática)");
  }

  calcular(valor){
    this.analiseService.getArranjo(valor).subscribe(results=>{
      if(results.erro){
        window.alert(results.erro);
        return;
      }
      this.Arranjo = JSON.parse(results.retorno);
      localStorage.setItem("last_Arranjo_result",JSON.stringify(this.Arranjo));
      localStorage.setItem("last_Arranjo_search",JSON.stringify(valor));
    })
  }

  getArranjo(valor, repeticoes){
    this.Arranjo = this.analiseService.getArranjoLocal(valor,repeticoes).toString();
    return this.Arranjo;
  }

  getWikiSummary(search:string){
    return this.wikiService.getWikiPage(search).subscribe(result=>this.wiki=result);
  }

}
