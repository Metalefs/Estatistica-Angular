import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaDadosAgrupadosComponent } from './tabela-dados-agrupados.component';
import { MediaComponent } from './media/media.component';
import { MedianaComponent } from './mediana/mediana.component';
import { ModaComponent } from './moda/moda.component';
import { DesvioPadraoComponent } from './desvio-padrao/desvio-padrao.component';
import { VarianciaComponent } from './variancia/variancia.component';
import { CoeficienteVariacaoComponent } from './coeficiente-variacao/coeficiente-variacao.component';
import { TabelaDistrbuicaoComponent } from './tabela-distrbuicao/tabela-distrbuicao.component';

const routes: Routes = [
    {
      path: '', component: TabelaDadosAgrupadosComponent,
      children:[
        {
          path: 'dados-agrupados',
          component: TabelaDistrbuicaoComponent,
          data: { animation:'isUp', title: '' }
        },
        {
          path: 'media',
          component: MediaComponent,
          data: { animation:'isUp', title: '' }
        },
        {
          path: 'mediana',
          component: MedianaComponent,
          data: { animation:'isUp', title: '' }
        },
        {
          path: 'moda',
          component: ModaComponent,
          data: { animation:'isUp', title: '' }
        },
        {
          path: 'desvioPadrao',
          component: DesvioPadraoComponent,
          data: { animation:'isUp', title: '' }
        },
        {
          path: 'variancia',
          component: VarianciaComponent,
          data: { animation:'isUp', title: '' }
        },
        {
          path: 'coeficienteVariacao',
          component: CoeficienteVariacaoComponent,
          data: { animation:'isUp', title: '' }
        },
      ]
    },
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabelaDadosAgrupadosRoutingModule { }
