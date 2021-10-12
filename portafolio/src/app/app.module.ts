import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaComponent,
    ContactoComponent,
    HabilidadesComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
