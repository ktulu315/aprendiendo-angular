import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 

@Component({
  standalone: true,
  selector: 'app-formulario',
  imports: [SliderComponent, SidebarComponent, FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public user: any;
  public campo: string;

  constructor(){
    this.campo = "";
    this.user = {
      nombre: "",
      apellidos: "",
      bio: "",
      genero: ""
    };
    
  
  }

  onSubmit(){
    console.log(this.user);
  }

  hasDadoClick(){
    alert("Diste click!!");
  }

  hasSalido(){
    alert("Saliste!!")
  }

}
