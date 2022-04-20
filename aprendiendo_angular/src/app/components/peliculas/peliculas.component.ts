import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public title: string;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;
  public fecha: any;


  constructor(private _peliculaService: PeliculaService) {
    this.title = "Películas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2021, 8, 29);
  }


  ngOnInit(): void {
    console.log(this.peliculas);
    console.log("Componente iniciado");
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(): void {
    console.log("DOCHECK LANZADO");
  }

  ngOnDestroy():void {
    console.log("El componente se va a eliminar");
  }

  cambiarTitulo(): void{
    this.title = "El título ha sido cambiado";
  }

  mostrarFavorita(event:any){
    this.favorita = event.pelicula;
  }

}
