import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    template: `
        <h1>{{ titulo }}</h1>
        <progress [value]="0.78"></progress>
        <p>{{ comentario }}</p>
        <strong>{{ year }}</strong>
    `
})

export class MiComponente{
    public titulo: String;
    public comentario: String;
    public year: number;

    constructor(){
        this.year = 2025;
        this.titulo = "Titulo de constructor";
        this.comentario = "Comentario de constructor";
    }
}