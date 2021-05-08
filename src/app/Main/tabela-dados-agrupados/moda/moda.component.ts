import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { WikiService } from 'src/app/shared/wiki.service';
import { TabelaDadosAgrupadosBase } from '../tabela-dados-agrupados.base';
import { TabelaService } from '../tabela.service';

@Component({
  selector: 'app-moda',
  templateUrl: './moda.component.html',
  styleUrls: ['./moda.component.css']
})
export class ModaComponent extends TabelaDadosAgrupadosBase implements OnInit {

  constructor(protected wikiService: WikiService, private fb:FormBuilder, private tabelaService:TabelaService, activeRoute:ActivatedRoute, public restApi: TabelaService, public dialog: MatDialog) {
    super(activeRoute,wikiService)
  }

  Moda: any;
  dadosForm: FormGroup;
  NumElementos:number;

  ngOnInit(): void {
    this.dadosForm = this.fb.group({
      values:[this.values,[Validators.required]]
    });
    if(this.hasValueParam()){
      this.handleActivatedRoute();
    }
    else{
      this.Moda = JSON.parse(localStorage.getItem('last_moda_data'));
      this.values = this.Moda?.Valores?.join(",");
    }
    this.getWikiSummary("Moda (estatística)");
  }

  calcular(dados){
    dados = dados.replace(/[^0-9,.]/g,',');
    this.NumElementos = dados.split(",").length;
    this.values = dados;
    if(this.dadosForm.get("values").valid)
      this.tabelaService.getModa(dados).subscribe(data=>{
        this.Moda = JSON.parse(data);
        localStorage.setItem('last_moda_data',   JSON.stringify(this.Moda));
      })
  }
  setValue(values:string){
    this.values = values;
  }
}
