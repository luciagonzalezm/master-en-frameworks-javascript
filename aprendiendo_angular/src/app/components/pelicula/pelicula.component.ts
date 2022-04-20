import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula!: Pelicula;
  @Output() marcarFavorita: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event: any, pelicula: Pelicula) {
    this.marcarFavorita.emit({
      pelicula: pelicula
    });
  }

}
