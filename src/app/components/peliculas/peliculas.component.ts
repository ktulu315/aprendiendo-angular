import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../../models/pelicula';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PeliculaComponent } from '../pelicula/pelicula.component';
import { EsParPipe } from '../../pipes/espar.pipe';
import { PeliculaService } from '../../services/pelicula.services';

@Component({
  standalone: true,
  selector: 'app-peliculas',
  imports: [CommonModule, SliderComponent, SidebarComponent, PeliculaComponent, EsParPipe],
  //providers: [PeliculaService], //Ahora se usa mejor {provideIn: root} en el servicio
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent {
  
  public titulo: String;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;
  public fecha: any;
  
  
  constructor( private _peliculaService: PeliculaService ){
    this.titulo = "Lista de Peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);

  }
  
  ngOnInit() {
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
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