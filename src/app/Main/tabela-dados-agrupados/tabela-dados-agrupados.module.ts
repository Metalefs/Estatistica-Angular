import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaDadosAgrupadosComponent } from './tabela-dados-agrupados.component';
import { MediaComponent } from './media/media.component';
import { MedianaComponent } from './mediana/mediana.component';
import { ModaComponent } from './moda/moda.component';
import { DesvioPadraoComponent } from './desvio-padrao/desvio-padrao.component';
import { VarianciaComponent } from './variancia/variancia.component';
import { CoeficienteVariacaoComponent } from './coeficiente-variacao/coeficiente-variacao.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { TabelaDadosAgrupadosRoutingModule } from './tabela-dados-agrupados.routing';
import { TabelaDistrbuicaoComponent } from './tabela-distrbuicao/tabela-distrbuicao.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TabelaDadosAgrupadosComponent, MediaComponent, MedianaComponent, ModaComponent, DesvioPadraoComponent, VarianciaComponent, CoeficienteVariacaoComponent, TabelaDistrbuicaoComponent],
  imports: [
    CommonModule,
    TabelaDadosAgrupadosRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class TabelaDadosAgrupadosModule { }
