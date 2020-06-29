import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabelaDadosAgrupadosComponent } from './Main/tabela-dados-agrupados/tabela-dados-agrupados.component';
import { MediaMedianaModaComponent } from './Main/media-mediana-moda/media-mediana-moda.component';
import { DesvioPadraoComponent } from './Main/desvio-padrao/desvio-padrao.component';
import { VarianciaComponent } from './Main/variancia/variancia.component';


const routes: Routes = [
    {path: 'TabelaAgrupamento', component: TabelaDadosAgrupadosComponent},
    {path: 'DesvioVariancia', component: DesvioPadraoComponent},
    {path: 'MediaMedianaModa', component: MediaMedianaModaComponent},
    { path: '',
      redirectTo: '/TabelaAgrupamento',
      pathMatch: 'full'
    },
    //{ path: '**', component: PageNotFoundComponent }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }