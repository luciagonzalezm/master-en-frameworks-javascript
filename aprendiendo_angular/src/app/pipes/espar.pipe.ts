import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform {
    transform(value: any) {
        var esPar = "no es un número par";
        if (value % 2 == 0) {
            esPar = "es un número par";
        }
        return `El año es: ${value} y ${esPar}`;
    }
}