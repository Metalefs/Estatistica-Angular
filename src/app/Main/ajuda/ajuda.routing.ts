import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjudaComponent } from './ajuda.component';


const routes: Routes = [
    {
      path: '', component: AjudaComponent,
      data: { animation:'', title: '' }
    },
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjudaRoutingModule { }
