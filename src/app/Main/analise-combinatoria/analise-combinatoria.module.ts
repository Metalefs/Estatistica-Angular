import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseCombinatoriaComponent } from './analise-combinatoria.component';
import { AnaliseCombinatoriaRoutingModule } from './analise-combinatoria.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AnaliseCombinatoriaComponent],
  imports: [
    CommonModule,
    AnaliseCombinatoriaRoutingModule,
    SharedModule,
  ],
  exports:[
    SharedModule
  ]
})
export class AnaliseCombinatoriaModule { }
