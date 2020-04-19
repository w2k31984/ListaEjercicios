import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; //Permite correr los componentes de nuestra aplicacion.
import {FormsModule} from '@angular/forms' //Agregando nuestro formulario al proyecto.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { EjercicioDetalleComponent } from './ejercicio-detalle/ejercicio-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    EjerciciosComponent,
    EjercicioDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Importamos el modulo de FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
