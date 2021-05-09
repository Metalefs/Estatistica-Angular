import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjudaComponent } from './ajuda.component';
import { AjudaRoutingModule } from './ajuda.routing';



@NgModule({
  declarations: [AjudaComponent],
  imports: [
    CommonModule,
    AjudaRoutingModule
  ]
})
export class AjudaModule { }
