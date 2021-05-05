import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnaliseCombinatoriaComponent } from './analise-combinatoria.component';
import { AnagramasComponent } from './anagramas/anagramas.component';

const routes: Routes = [
    {
      path: '', component: AnaliseCombinatoriaComponent,
      children:[
        {
          path: 'anagramas',
          component: AnagramasComponent
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
