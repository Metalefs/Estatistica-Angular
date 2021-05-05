import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaDadosAgrupadosComponent } from './Main/tabela-dados-agrupados/tabela-dados-agrupados.component';
import { AnaliseCombinatoriaComponent } from './Main/analise-combinatoria/analise-combinatoria.component';

const routes: Routes = [
    {path: '', component: TabelaDadosAgrupadosComponent},
    {
      path: 'agrupamento',
      loadChildren: () => import('./Main/tabela-dados-agrupados/tabela-dados-agrupados.module').then(m => m.TabelaDadosAgrupadosModule)
    },
    {
      path: 'analiseCombinatoria',
      loadChildren: () => import('./Main/analise-combinatoria/analise-combinatoria.module').then(m => m.AnaliseCombinatoriaModule)
    },
    //{ path: '**', component: PageNotFoundComponent }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
