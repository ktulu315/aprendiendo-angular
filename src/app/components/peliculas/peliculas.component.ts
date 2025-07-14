import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../../models/pelicula';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PeliculaComponent } from '../pelicula/pelicula.component';

@Component({
  standalone: true,
  selector: 'app-peliculas',
  imports: [CommonModule, SliderComponent, SidebarComponent, PeliculaComponent],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent {
  
  public titulo: String;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;
  
  constructor(){
    this.titulo = "Lista de Peliculas";
    this.peliculas = [
      new Pelicula ("Spiderman 4", 2024, "https://i.redd.it/9nh65g23ojzb1.jpg"),
      new Pelicula ("V for Vendetta", 1990, "https://i.scdn.co/image/ab67616d0000b273a120726dcb2b4ddf8a4e46b9"),
      new Pelicula ("Los vengadores", 2018, "https://es.web.img3.acsta.net/pictures/14/03/10/10/35/587504.jpg"),
      new Pelicula ("La princesa Mononoke", 2010, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPiEFnprnUWFaalB4_tE8pVkEsM672eghKA&s")
    ]
  }
  
  ngOnInit() {
    console.log(this.peliculas);
  }

  ngOnDestroy(): void {
      console.log("El componente se va a eliminar");
  }
    
  ngDoCheck() {
    console.log("Componente iniciado Docheck");
  }

  cambiarTitulo(){
    this.titulo = "Listado de Peliculas";
  }

  mostrarFavorita(event:Pelicula, pelicula: Pelicula){
    this.favorita = pelicula;
  }

}