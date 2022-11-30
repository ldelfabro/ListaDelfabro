import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDelfabroComponent } from './lista-delfabro/lista-delfabro.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { EstadoAprobacionPipe } from './estado-aprobacion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaDelfabroComponent,
    CabeceraComponent,
    EstadoAprobacionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
