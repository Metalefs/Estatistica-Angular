import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WikiService, WikiSummary } from 'src/app/shared/wiki.service';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'app-fatorial',
  templateUrl: './fatorial.component.html',
  styleUrls: ['./fatorial.component.css']
})
export class FatorialComponent implements OnInit {
  Fatorial:string;
  values:string;
  repetition:number;
  dadosForm: FormGroup;
  public wiki:WikiSummary = {extract_html:"<p>Um <b>anagrama</b> é uma espécie de jogo de palavras criado com a reorganização das letras de uma palavra ou expressão para produzir outras palavras ou expressões, utilizando todas as letras originais exatamente uma vez. Exemplos amplamente conhecidos são Iracema e América e amor e Roma. Outro exemplo é o prenome da escritora brasileira Nélida Piñón, anagrama do prenome de seu avô materno Daniel Cuiñas.</p>"};
  constructor( protected wikiService: WikiService, private fb:FormBuilder, private analiseService: AnaliseService) {

  }
  ngOnInit(): void {
    this.dadosForm = this.fb.group({
      values:[this.values,[Validators.required]],
      repetition:[this.repetition,[Validators.required]],
    })
    this.Fatorial = JSON.parse(localStorage.getItem('last_factorial_result'));
    this.values = JSON.parse(localStorage.getItem('last_factorial_search'));
    this.getWikiSummary("Fatorial");
  }

  calcular(valor,repetition){
    this.analiseService.getFatorial(valor,repetition).subscribe(results=>{
      if(results.erro){
        window.alert(results.erro);
        return;
      }
      this.Fatorial = JSON.parse(results.retorno);
      localStorage.setItem("last_factorial_result",JSON.stringify(this.Fatorial));
      localStorage.setItem("last_factorial_search",JSON.stringify(valor));
    })
  }

  getFactorial(valor,repetition = 0){
    this.Fatorial = this.analiseService.getFactorialLocal(valor,repetition).toString();
    return this.Fatorial;
  }

  getWikiSummary(search:string){
    return this.wikiService.getWikiPage(search).subscribe(result=>this.wiki=result);
  }
}
