import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { WikiService } from 'src/app/shared/wiki.service';
import { TabelaDadosAgrupadosBase } from '../tabela-dados-agrupados.base';
import { TabelaService } from '../tabela.service';

@Component({
  selector: 'app-coeficiente-variacao',
  templateUrl: './coeficiente-variacao.component.html',
  styleUrls: ['./coeficiente-variacao.component.css']
})
export class CoeficienteVariacaoComponent extends TabelaDadosAgrupadosBase implements OnInit {

  constructor(protected wikiService: WikiService, private fb:FormBuilder, private tabelaService:TabelaService, activeRoute:ActivatedRoute, public restApi: TabelaService, public dialog: MatDialog) {
    super(activeRoute,wikiService)
  }

  CoeficienteVariacao: any;
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
      this.CoeficienteVariacao = JSON.parse(localStorage.getItem('last_cv_data'));
      this.values = this.CoeficienteVariacao?.Valores;
    }
    this.getWikiSummary("Coeficiente de Variação");
  }

  calcular(dados){
    dados = dados.replace(/[^0-9,.]/g,',');
    this.NumElementos = dados.split(",").length;
    this.values = dados;
    if(this.dadosForm.get("values").valid)
      this.tabelaService.getVariancia(dados).subscribe(data=>{
        this.CoeficienteVariacao = JSON.parse(data);
        localStorage.setItem('last_cv_data',   JSON.stringify(this.CoeficienteVariacao));
      })
  }
  setValue(values:string){
    this.values = values;
  }
}
