import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  standalone: false,
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  constructor(){
    console.log("constructor lanzado");

  }

  /*NgOnInit() {
    console.log("Componente iniciado");
  }
  */
}