import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseCombinatoriaComponent } from './analise-combinatoria.component';
import { AnaliseCombinatoriaRoutingModule } from './analise-combinatoria.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material-module';
import { AnagramasComponent } from './anagramas/anagramas.component';
import { FatorialComponent } from './fatorial/fatorial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CombinacaoComponent } from './combinacao/combinacao.component';
import { ArranjoComponent } from './arranjo/arranjo.component';

@NgModule({
  declarations: [AnaliseCombinatoriaComponent, AnagramasComponent, FatorialComponent, CombinacaoComponent, ArranjoComponent],
  imports: [
    CommonModule,
    SharedModule,
    AnaliseCombinatoriaRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
  ]
})
export class AnaliseCombinatoriaModule { }
