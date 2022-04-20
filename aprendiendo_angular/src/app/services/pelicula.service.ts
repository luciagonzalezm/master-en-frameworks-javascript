import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{
    public peliculas: Pelicula[];
    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4", 2019, "https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/03/spider-man-scaled.jpg?fit=1200%2C753&ssl=1"),
            new Pelicula("Los Vengadores Endgame", 2020, "https://i1.wp.com/hipertextual.com/wp-content/uploads/2019/04/hipertextual-nuevo-trailer-avengers-endgame-agradece-fans-universo-marvel-2019351167.jpg?fit=1600%2C900&ssl=1"),
            new Pelicula("Batman vs Superman", 2015, "https://www.publico.es/uploads/2015/04/17/5530efbf7aeaf.jpg"),
          ];
    }
    holaMundo(){
        return 'Hola Mundo desde un servicio de Angular';
    }

    getPeliculas(){
        return this.peliculas;
    }
}