import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { ClarityModule } from '@clr/angular';
import { MaterialModule } from './material-module';
import { NavComponent } from './navbar/navbar.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { MathjaxComponent } from './mathjax/mathjax.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { LinkTrackerService } from './link-tracker.service';
import { PageScrollService } from './shared/scrollService';

import { TabelaDadosAgrupadosComponent } from './Main/tabela-dados-agrupados/tabela-dados-agrupados.component';
import { AnaliseCombinatoriaComponent } from './Main/analise-combinatoria/analise-combinatoria.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaDadosAgrupadosComponent,
    NavComponent,
    DialogComponent,
    MathjaxComponent,
    ScrollTopComponent,
    AnaliseCombinatoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ClarityModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: Document },PageScrollService,LinkTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
