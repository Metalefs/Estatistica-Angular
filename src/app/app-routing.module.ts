import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaDadosAgrupadosComponent } from './Main/tabela-dados-agrupados/tabela-dados-agrupados.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'TabelaAgrupamento', component: TabelaDadosAgrupadosComponent},
    //{ path: '**', component: PageNotFoundComponent }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }