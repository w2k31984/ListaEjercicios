import { Component, OnInit } from '@angular/core';
import {Ejercicio} from '../ejercicio';
import {EJERCICIOS} from './collection-ejercicios';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicios=EJERCICIOS;
  //Agregando una nueva propiedad
  ejercicioSeleccionado:Ejercicio;
  constructor() {}

  ngOnInit(): void {
  }
  //Pegamos el componente onSelectEjercicio
  onSelectEjercicio(ejercicio:Ejercicio):void{
  console.log("Ejercicio Seleccionado="+ejercicio.id);
  this.ejercicioSeleccionado=ejercicio;
}
}
