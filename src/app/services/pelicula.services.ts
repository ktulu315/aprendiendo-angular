import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable({ providedIn: 'root' }) export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula ("Spiderman 4", 2024, "https://i.redd.it/9nh65g23ojzb1.jpg"),
            new Pelicula ("V for Vendetta", 1990, "https://i.scdn.co/image/ab67616d0000b273a120726dcb2b4ddf8a4e46b9"),
            new Pelicula ("Los vengadores", 2019, "https://es.web.img3.acsta.net/pictures/14/03/10/10/35/587504.jpg"),
            new Pelicula ("La princesa Mononoke", 2011, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPiEFnprnUWFaalB4_tE8pVkEsM672eghKA&s")
        ];
    }

    getPeliculas(){
        return this.peliculas;
    }

    holaMundo() {
        console.log("holiii desde el servicio de peliculaservice :)");
    }

}