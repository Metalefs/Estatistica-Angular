import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Main/home/home.component';

const routes: Routes = [
    {
      path: '', component: HomeComponent,
      data: { animation:'isUp', title: '' }
    },
    {
      path: 'agrupamento',
      loadChildren: () => import('./Main/tabela-dados-agrupados/tabela-dados-agrupados.module').then(m => m.TabelaDadosAgrupadosModule)
    },
    {
      path: 'analiseCombinatoria',
      loadChildren: () => import('./Main/analise-combinatoria/analise-combinatoria.module').then(m => m.AnaliseCombinatoriaModule)
    },
    {
      path: 'sobre',
      loadChildren: () => import('./Main/sobre/sobre.module').then(m => m.SobreModule)
    },
    {
      path: 'ajuda',
      loadChildren: () => import('./Main/ajuda/ajuda.module').then(m => m.AjudaModule)
    },
    //{ path: '**', component: PageNotFoundComponent }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
