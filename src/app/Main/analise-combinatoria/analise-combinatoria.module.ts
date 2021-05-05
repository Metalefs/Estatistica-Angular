import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseCombinatoriaComponent } from './analise-combinatoria.component';
import { AnaliseCombinatoriaRoutingModule } from './analise-combinatoria.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material-module';
import { AnagramasComponent } from './anagramas/anagramas.component';

@NgModule({
  declarations: [AnaliseCombinatoriaComponent, AnagramasComponent],
  imports: [
    CommonModule,
    SharedModule,
    AnaliseCombinatoriaRoutingModule,
    MaterialModule
  ],
  exports:[
  ]
})
export class AnaliseCombinatoriaModule { }
