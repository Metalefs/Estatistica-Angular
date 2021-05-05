import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ClarityModule } from '@clr/angular';
import { MaterialModule } from './material-module';
import { MathjaxComponent } from './mathjax/mathjax.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [MathjaxComponent, ScrollTopComponent, DialogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ClarityModule,
    BrowserAnimationsModule,
    ServiceWorkerModule,
    MatDialog
  ],
  exports:[
    CommonModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ClarityModule,
    BrowserAnimationsModule,
    ServiceWorkerModule,
    MatDialog,
    MathjaxComponent, ScrollTopComponent, DialogComponent,
  ]
})
export class SharedModule { }
