import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaDadosAgrupadosComponent } from './Main/tabela-dados-agrupados/tabela-dados-agrupados.component';

const routes: Routes = [
    {path: 'TabelaAgrupamento', component: TabelaDadosAgrupadosComponent},
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