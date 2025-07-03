import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  imports: [CommonModule]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  
  public titulo: string;
  
  constructor(){
    console.log("constructor lanzado constructor");
    this.titulo = "Componente Peliculas";
  }
  
  ngOnInit() {
    console.log("Componente iniciado ONinit");
  }

  ngOnDestroy(): void {
      console.log("El componente se va a eliminar");
  }
    
  ngDoCheck() {
    console.log("Componente iniciado Docheck");
  }

  cambiarTitulo(){
    this.titulo = "Titulo ha sido cambiado";
  }

}