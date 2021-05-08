import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { WikiService } from 'src/app/shared/wiki.service';
import { TabelaDadosAgrupadosBase } from '../tabela-dados-agrupados.base';
import { TabelaService } from '../tabela.service';

@Component({
  selector: 'app-variancia',
  templateUrl: './variancia.component.html',
  styleUrls: ['./variancia.component.css']
})
export class VarianciaComponent extends TabelaDadosAgrupadosBase implements OnInit {

  constructor(protected wikiService: WikiService, private fb:FormBuilder, private tabelaService:TabelaService, activeRoute:ActivatedRoute, public restApi: TabelaService, public dialog: MatDialog) {
    super(activeRoute,wikiService)
  }

  Variancia: any;
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
      this.Variancia = JSON.parse(localStorage.getItem('last_variancia_data'));
      this.values = this.Variancia?.Valores;
    }
    this.getWikiSummary("Variância");
  }

  calcular(dados){
    dados = dados.replace(/[^0-9,.]/g,',');
    this.NumElementos = dados.split(",").length;
    this.values = dados;
    if(this.dadosForm.get("values").valid)
      this.tabelaService.getVariancia(dados).subscribe(data=>{
        this.Variancia = JSON.parse(data);
        localStorage.setItem('last_variancia_data',   JSON.stringify(this.Variancia));
      })
  }
  setValue(values:string){
    this.values = values;
  }

}
