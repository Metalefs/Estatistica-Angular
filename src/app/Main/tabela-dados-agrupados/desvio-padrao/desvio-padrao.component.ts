import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { WikiService } from 'src/app/shared/wiki.service';
import { TabelaDadosAgrupadosBase } from '../tabela-dados-agrupados.base';
import { TabelaService } from '../tabela.service';

@Component({
  selector: 'app-desvio-padrao',
  templateUrl: './desvio-padrao.component.html',
  styleUrls: ['./desvio-padrao.component.css']
})
export class DesvioPadraoComponent extends TabelaDadosAgrupadosBase implements OnInit {

  constructor(protected wikiService: WikiService, private fb:FormBuilder, private tabelaService:TabelaService, activeRoute:ActivatedRoute, public restApi: TabelaService, public dialog: MatDialog) {
    super(activeRoute,wikiService)
  }
  Desvio: any;
  dadosForm: FormGroup;
  NumElementos:number;

  ngOnInit(): void {
    this.dadosForm = this.fb.group({
      valores:[this.values,[Validators.required]]
    });
    if(this.hasValueParam()){
      this.handleActivatedRoute();
    }
    else{
      this.Desvio = JSON.parse(localStorage.getItem('last_desvio_data'));
      this.values = this.Desvio?.Valores?.join(",");
    }
    this.getWikiSummary("Desvio (estatística)");
  }

  calcular(dados){
    dados = dados.replace(/[^0-9,.]/g,',');
    this.NumElementos = dados.split(",").length;
    this.values = dados;
    if(this.dadosForm.get("valores").valid)
      this.tabelaService.getDesvioPadrao(dados).subscribe(data=>{
        this.Desvio = JSON.parse(data);
        localStorage.setItem('last_desvio_data', JSON.stringify(this.Desvio));
      })
  }
  setValue(values:string){
    this.values = values;
  }
}
