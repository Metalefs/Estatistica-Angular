import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Main/home/home.component';
import { TabelaDadosAgrupadosComponent } from './Main/tabela-dados-agrupados/tabela-dados-agrupados.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
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
