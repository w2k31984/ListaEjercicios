import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; //Permite correr los componentes de nuestra aplicacion

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';

@NgModule({
  declarations: [
    AppComponent,
    EjerciciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
