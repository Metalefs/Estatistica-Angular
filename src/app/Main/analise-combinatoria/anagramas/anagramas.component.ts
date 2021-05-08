import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinkTrackerService } from 'src/app/link-tracker.service';
import { WikiService, WikiSummary } from 'src/app/shared/wiki.service';
import { AnaliseService } from '../analise.service';
@Component({
  selector: 'app-anagramas',
  templateUrl: './anagramas.component.html',
  styleUrls: ['./anagramas.component.css']
})
export class AnagramasComponent implements OnInit {
  Anagramas:Array<string>;
  valoresAnagrama:Array<string>;
  dadosForm: FormGroup;
  public wiki:WikiSummary = {extract_html:"<p>Um <b>anagrama</b> é uma espécie de jogo de palavras criado com a reorganização das letras de uma palavra ou expressão para produzir outras palavras ou expressões, utilizando todas as letras originais exatamente uma vez. Exemplos amplamente conhecidos são Iracema e América e amor e Roma. Outro exemplo é o prenome da escritora brasileira Nélida Piñón, anagrama do prenome de seu avô materno Daniel Cuiñas.</p>"};
  constructor( protected wikiService: WikiService, public linkTracker: LinkTrackerService, private fb:FormBuilder, private analiseService: AnaliseService) {

  }
  ngOnInit(): void {
    this.dadosForm = this.fb.group({
      valores:[this.valoresAnagrama,[Validators.required]]
    })
    this.Anagramas = JSON.parse(localStorage.getItem('last_anagram_result'));
    this.valoresAnagrama = JSON.parse(localStorage.getItem('last_anagram_search'));
    this.getWikiSummary("Anagrama");
  }

  getAnagrama(valor){
    this.analiseService.getAnagrama(valor).subscribe(results=>{
      if(results.erro){
        window.alert(results.erro);
        return;
      }
      this.Anagramas = JSON.parse(results.retorno);
      localStorage.setItem("last_anagram_result",JSON.stringify(this.Anagramas));
      localStorage.setItem("last_anagram_search",JSON.stringify(valor));
    })
  }

  getWikiSummary(search:string){
    return this.wikiService.getWikiPage(search).subscribe(result=>this.wiki=result);
  }
}
