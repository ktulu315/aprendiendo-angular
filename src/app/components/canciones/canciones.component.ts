import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
  standalone: true,
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
  imports: [SidebarComponent, SliderComponent],
})

export class CancionesComponent {
  public nombre: String;
  public pista: Number;
  public duracion: string;

  constructor(){
    this.nombre ="Trackname"
    this.pista = 0;
    this.duracion = "0";
  }

  llenarDatos(){
    this.nombre ="Metal Militia"
    this.pista = 2;
    this.duracion = "10:07";
  }

  borrarDatos(){
    this.nombre ="Erased"
    this.pista = 0;
    this.duracion = "0:00";
  }

}
