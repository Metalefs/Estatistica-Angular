import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { WikiService } from 'src/app/shared/wiki.service';
import { TabelaDadosAgrupadosBase } from '../tabela-dados-agrupados.base';
import { TabelaService } from '../tabela.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent extends TabelaDadosAgrupadosBase implements OnInit {

  constructor(protected wikiService: WikiService, private fb:FormBuilder, private tabelaService:TabelaService, activeRoute:ActivatedRoute, public restApi: TabelaService, public dialog: MatDialog) {
    super(activeRoute,wikiService)
  }
  Media: any;
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
      this.Media = JSON.parse(localStorage.getItem('last_average_data'));
      this.values = this.Media?.Valores?.join(",");
    }
    this.getWikiSummary("Média");
  }

  calcular(dados){
    dados = dados.replace(/[^0-9,.]/g,',');
    this.NumElementos = dados.split(",").length;
    this.values = dados;
    if(this.dadosForm.get("values").valid)
      this.tabelaService.getMedia(dados).subscribe(data=>{
        this.Media = JSON.parse(data);
        localStorage.setItem('last_average_data',   JSON.stringify(this.Media));
      })
  }
  setValue(values:string){
    this.values = values;
  }
}
