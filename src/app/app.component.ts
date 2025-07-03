/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-angular de la clase de Master hecha por David';
}
*/

import { Component } from '@angular/core';
import { MiComponente } from "./components/mi-componente/mi-componente.component";
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { CancionesComponent } from './components/canciones/canciones.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MiComponente, PeliculasComponent, CancionesComponent],  // puedes agregar MiComponente aquí si lo usas
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Titulo de app.component.ts';
}