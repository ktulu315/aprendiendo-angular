import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from "../peliculas/peliculas.component";

@Component({
    standalone: true,
    selector: 'mi-componente',
    imports: [CommonModule, PeliculasComponent],
    templateUrl: './mi-componente.component.html',
    styleUrls: ['./mi-componente.component.css']
})

export class MiComponente {
    public titulo: String;
    public comentario: String;
    public year: number;
    public mostrarPeliculas: boolean;
    
    constructor(){
        this.year = 2020;
        this.titulo = "Titulo de constructor";
        this.comentario = "Comentario de constructor";
        this.mostrarPeliculas = true;
    }

    valor(){
        return Math.random();
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}