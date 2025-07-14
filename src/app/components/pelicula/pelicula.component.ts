import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  standalone: true,
  selector: 'app-pelicula',
  imports: [CommonModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  @Input() pelicula!: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();
  public fav = false;
  public favTitle!: string;
  seleccionar(event: any, pelicula: Pelicula){
    this.MarcarFavorita.emit({
      pelicula: Pelicula
    });
  }

  mostrarLetrero(pelicula: Pelicula){
    this.fav = true;
    this.favTitle = pelicula.title;
  }

}
