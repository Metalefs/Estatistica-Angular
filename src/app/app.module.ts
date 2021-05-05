import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { NavComponent } from './navbar/navbar.component';
import { LinkTrackerService } from './link-tracker.service';
import { PageScrollService } from './shared/scrollService';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material-module';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: Document },PageScrollService,LinkTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
