import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinkTrackerService } from 'src/app/link-tracker.service';
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
  constructor(public linkTracker: LinkTrackerService, private fb:FormBuilder, private analiseService: AnaliseService) {

  }
  ngOnInit(): void {
    this.dadosForm = this.fb.group({
      valores:[this.valoresAnagrama,[Validators.required]]
    })
  }

  getAnagrama(valor){
    this.analiseService.getAnagrama(valor).subscribe(results=>{
      if(results.erro){
        window.alert(results.erro);
        return;
      }
      this.Anagramas = JSON.parse(results.retorno);
    })
  }
}
