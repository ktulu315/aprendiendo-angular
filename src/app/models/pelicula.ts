export class Pelicula {
 /*   public title: string;
    public year: number;
    public image: string;

    constructor(title: string, year: number, image: string){
        this.title = title;
        this.year = year;
        this.image = image; 
    }
*/ //ya no es necesario se puede hacer de la siguiente forma: 
    constructor(
        public title: string,
        public year: number,
        public image: string 
    ){}
}
