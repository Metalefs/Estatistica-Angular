import { Component, ViewChild, OnInit } from '@angular/core';
import { TabelaService } from './tabela.service';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogData } from 'src/app/shared/dialog/dialog.component';
import { LinkTrackerService } from 'src/app/link-tracker.service';
import { PageScrollService } from '../../shared/scrollService';
import { MathjaxComponent } from 'src/app/shared/mathjax/mathjax.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface TabelaDadosAgrupados {
  intervalos:number[];
  xi:number[];
  fi:number[];
  Fi:number[];
  fr:number[];
  Fr:number[];
  QuadradoDoTermo:number[];
  FrequenciaSimplesVezesOTermo:number[];
  FrequenciaSimplesVezesOQuadradoDoTermo:number[];
}
export interface DadosTabelaDadosAgrupados {
  Amplitude:number;
  NumeroDeElementos:number;
  QuantidadeIntervalos:number;
  Intervalo:number;
  ValorMinimo:number;
  ValorMaximo:number;
  Moda:object;
  Mediana:object;
  Media:object;
  DesvioPadrao:object;
  Variancia:object;
  Passos:object;


  SomatorioFrequenciaSimplesVezesOTermo:number;
  SomatorioFrequenciaSimplesVezesOQuadradoDoTermo:number;
  MediaDp:number;
  DesvioPadraoTabela:number;
}
@Component({
  selector: 'tabela-dados-agrupados',
  templateUrl: './tabela-dados-agrupados.component.html',
  styleUrls: ['./tabela-dados-agrupados.component.css']
})

export class TabelaDadosAgrupadosComponent implements OnInit {

  constructor(private fb:FormBuilder, linkTracker: LinkTrackerService, public restApi: TabelaService, public dialog: MatDialog, private PageScrollService: PageScrollService) {

  }
  dadosForm: FormGroup;
  panelExpandedProperty:boolean = false;
  calculosExpandedProperty:boolean = false;
  @ViewChild(MatTable) MatTable: MatTable<any>;
  @ViewChild("math") MathJax: MathjaxComponent;
  tabela:TabelaDadosAgrupados[] = [];
  DadosTabela:DadosTabelaDadosAgrupados = null;
  NomeTabela:string = "Dados";
  valoresTabela:string;
  Simples:boolean;

  ngOnInit(): void {
    this.dadosForm = this.fb.group({
      valores:[this.valoresTabela,[Validators.required, Validators.pattern(/^[0-9.,]+/)]]
    })
    if(localStorage.getItem('last_table_search') !== null){
      this.tabela = JSON.parse(localStorage.getItem('last_table_search'));
      this.valoresTabela = JSON.parse(localStorage.getItem('last_table_values'));
      this.DadosTabela = JSON.parse(localStorage.getItem('last_table_data'));
      this.Simples = Boolean(localStorage.getItem('last_table_type'));

      if(this.Simples){
        this.displayedColumns = ['i','intervalos', 'fi', 'Fi','fr','Fr'];
        this.dp_displayedColumns = ['i','intervalos', 'fi', 'Fi','fr','Fr','QuadradoDoTermo',
        'FrequenciaSimplesVezesOTermo',
        'FrequenciaSimplesVezesOQuadradoDoTermo'];
      }
    }
  }
  NumElementos:number;
  GerarTabela(dados :string){
    dados = dados.replace(/[^0-9,.]/g,',');
    this.NumElementos = dados.split(",").length;
    this.valoresTabela = dados;
    if(this.dadosForm.get("valores").valid)
      this.restApi.getTabelaDadosAgrupados(dados).subscribe(data => {
        data = JSON.parse(data);

        if(data.erro){
          window.alert(data.erro);
          return;
        }

        this.tabela = [];
        this.DadosTabela = null;
        this.Simples = data.Simples;
        console.log(data);
        for (let i = 0; i < data.QuantidadeIntervalos; i++)
        {
          if(data.Simples){
            this.displayedColumns = ['i','intervalos', 'fi', 'Fi','fr','Fr'];

            this.dp_displayedColumns = ['i','intervalos', 'fi', 'Fi','fr','Fr','QuadradoDoTermo',
            'FrequenciaSimplesVezesOTermo',
            'FrequenciaSimplesVezesOQuadradoDoTermo'];

            this.tabela.push({
              intervalos:data.ValoresDistintos[i].Key,
              xi: [0],
              fi:data.ValoresDistintos[i].Value.toFixed(2),
              Fi:data.Fi[i].toFixed(2),
              fr:data.fr[i].toFixed(2),
              Fr:data.Fr[i].toFixed(2),
              QuadradoDoTermo:data.QuadradoDoTermo[i].toFixed(2),
              FrequenciaSimplesVezesOTermo:data.FrequenciaSimplesVezesOTermo[i].toFixed(2),
              FrequenciaSimplesVezesOQuadradoDoTermo:data.FrequenciaSimplesVezesOQuadradoDoTermo[i].toFixed(2),
            });
          }
          else{
            this.displayedColumns = ['i','intervalos', 'xi', 'fi', 'Fi','fr','Fr'];
            this.dp_displayedColumns = ['i','intervalos', 'xi', 'fi', 'Fi','fr','Fr','QuadradoDoTermo',
            'FrequenciaSimplesVezesOTermo',
            'FrequenciaSimplesVezesOQuadradoDoTermo'];
              this.tabela.push({
                intervalos:data.intervalos[i],
                xi:data.xi[i].toFixed(2),
                fi:data.fi[i].toFixed(2),
                Fi:data.Fi[i].toFixed(2),
                fr:data.fr[i].toFixed(2),
                Fr:data.Fr[i].toFixed(2),
                QuadradoDoTermo:data.QuadradoDoTermo[i].toFixed(2),
                FrequenciaSimplesVezesOTermo:data.FrequenciaSimplesVezesOTermo[i].toFixed(2),
                FrequenciaSimplesVezesOQuadradoDoTermo:data.FrequenciaSimplesVezesOQuadradoDoTermo[i].toFixed(2),
              });
          }
        }
        this.DadosTabela =
        {
          Amplitude:data.Amplitude,
          NumeroDeElementos:data.NumeroDeElementos,
          QuantidadeIntervalos:data.QuantidadeIntervalos,
          Intervalo:data.Intervalo,
          ValorMinimo:data.ValorMinimo,
          ValorMaximo:data.ValorMaximo,
          Moda:data.Moda,
          Passos:data.Passos,
          Mediana:data.Mediana,
          Media:data.Media,
          DesvioPadrao:data.DesvioPadrao,
          Variancia:data.Variancia,


          SomatorioFrequenciaSimplesVezesOTermo:data.SomatorioFrequenciaSimplesVezesOTermo,
          SomatorioFrequenciaSimplesVezesOQuadradoDoTermo:data.SomatorioFrequenciaSimplesVezesOQuadradoDoTermo,
          MediaDp:data.MediaDp,
          DesvioPadraoTabela:data.DesvioPadraoTabela,
        };
        localStorage.setItem('last_table_values', JSON.stringify(this.valoresTabela));
        localStorage.setItem('last_table_data',   JSON.stringify(this.DadosTabela));
        localStorage.setItem('last_table_search', JSON.stringify(this.tabela));
        localStorage.setItem('last_table_type',   JSON.stringify(this.Simples));
        this.MatTable.renderRows();
      });
  }

  openDialog(operacao,passos): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '90%',
      data: {operacao: operacao, passos:  passos}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  displayedColumns: string[] = ['i','intervalos', 'xi', 'fi', 'Fi','fr','Fr'];
  dp_displayedColumns: string[] = ['i','intervalos', 'xi', 'fi', 'Fi','fr','Fr','QuadradoDoTermo',
  'FrequenciaSimplesVezesOTermo',
  'FrequenciaSimplesVezesOQuadradoDoTermo'];

  fecharPainel(){
    this.panelExpandedProperty = false;
    this.PageScrollService.scrollElementIntoView("main");
  }

}
