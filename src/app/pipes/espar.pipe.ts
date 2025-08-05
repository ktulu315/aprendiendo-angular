import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'espar',
    standalone: true
})

export class EsParPipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        if(value % 2 == 0){
            return "El año " + value + " es par";
        }
        return "El año " + value + " es impar";
    }
} 