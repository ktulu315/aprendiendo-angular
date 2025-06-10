import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html',
    styleUrl: './mi-componente.component.css'
})

export class MiComponente{
    public titulo: String;
    public comentario: String;
    public year: number;

    constructor(){
        this.year = 2020;
        this.titulo = "Titulo de constructor";
        this.comentario = "Comentario de constructor";
    }

    valor(){
        return Math.random();
    }
}