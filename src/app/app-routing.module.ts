import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaDadosAgrupadosComponent } from './Main/tabela-dados-agrupados/tabela-dados-agrupados.component';
import { AnaliseCombinatoriaComponent } from './Main/analise-combinatoria/analise-combinatoria.component';

const routes: Routes = [
    {path: '', component: TabelaDadosAgrupadosComponent},
    {path: 'TabelaAgrupamento', component: TabelaDadosAgrupadosComponent},
    {path: 'AnaliseCombinatoria', component: AnaliseCombinatoriaComponent},
    //{ path: '**', component: PageNotFoundComponent }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
