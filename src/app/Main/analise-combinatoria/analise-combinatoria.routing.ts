import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnaliseCombinatoriaComponent } from './analise-combinatoria.component';
import { AnagramasComponent } from './anagramas/anagramas.component';
import { FatorialComponent } from './fatorial/fatorial.component';
import { CombinacaoComponent } from './combinacao/combinacao.component';
import { ArranjoComponent } from './arranjo/arranjo.component';

const routes: Routes = [
    {
      path: '', component: AnaliseCombinatoriaComponent,
      children:[
        {
          path: 'anagramas',
          component: AnagramasComponent,
          data: { animation:'isUp', title: '' }
        },
        {
          path: 'fatorial',
          component: FatorialComponent,
          data: { animation:'isUp', title: '' }
        },
        {
          path: 'combinacao',
          component: CombinacaoComponent,
          data: { animation:'isUp', title: '' }
        },
        {
          path: 'arranjo',
          component: ArranjoComponent,
          data: { animation:'isUp', title: '' }
        }
      ]
    },
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnaliseCombinatoriaRoutingModule { }
