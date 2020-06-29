import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TabelaDadosAgrupadosComponent } from './Main/tabela-dados-agrupados/tabela-dados-agrupados.component';
import { MediaMedianaModaComponent } from './Main/media-mediana-moda/media-mediana-moda.component';
import { DesvioPadraoComponent } from './Main/desvio-padrao/desvio-padrao.component';
import { VarianciaComponent } from './Main/variancia/variancia.component';
import { SidenavComponent } from './shared/sidenav-fixed/sidenav.component';
import { DesvioVarianciaComponent } from './Main/desvio-variancia/desvio-variancia.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaDadosAgrupadosComponent,
    MediaMedianaModaComponent,
    DesvioPadraoComponent,
    VarianciaComponent,
    SidenavComponent,
    DesvioVarianciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
