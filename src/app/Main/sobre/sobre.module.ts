import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { SobreRoutingModule } from './sobre.routing';



@NgModule({
  declarations: [SobreComponent],
  imports: [
    CommonModule,
    SobreRoutingModule
  ]
})
export class SobreModule { }
