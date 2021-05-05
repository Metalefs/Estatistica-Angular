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
import { NavComponent } from './navbar/navbar.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { LinkTrackerService } from './link-tracker.service';
import { PageScrollService } from './shared/scrollService';

import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material-module';

import { MathjaxComponent } from './shared/mathjax/mathjax.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DialogComponent,
    MathjaxComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
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
