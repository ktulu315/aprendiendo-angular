
import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  standalone: true,
  selector: 'app-pagina',
  imports: [SliderComponent, SidebarComponent],
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {
  public nombre: String;
  public apellido: String;
  constructor(private _route: ActivatedRoute, private _router: Router ){
    this.nombre = "Name";
    this.apellido = "LastName";

  }

  ngOnInit(){
    this._route.params.subscribe((params: Params) =>{
      this.nombre = params['nombre'];
      this.apellido = params['apellido']
    });
  }

  redireccion() {
    //alert("Redireccion");
    this._router.navigate(['pagina-de-prueba','David','Gualteros']);
  }

}
