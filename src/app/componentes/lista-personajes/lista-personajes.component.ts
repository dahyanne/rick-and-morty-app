import { Component, OnInit } from '@angular/core';
import { ServicioRickAndMortyService } from '../../servicios/servicio-rick-and-morty.service';

interface Personaje {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  personajes: Personaje[] = [];
  paginaActual = 1;
  haySiguientePagina = true;

  constructor(private servicioRickAndMorty: ServicioRickAndMortyService) { }

  ngOnInit() {
    this.cargarPersonajes();
  }

  cargarPersonajes(pagina?: number) {
    this.servicioRickAndMorty.getPersonajes(pagina).subscribe(respuesta => {
      this.personajes = respuesta.results;
      this.paginaActual = pagina || 1;
      this.haySiguientePagina = !!respuesta.results.length;
    });
  }

  cargarPaginaAnterior() {
    this.cargarPersonajes(this.paginaActual - 1);
  }

  cargarSiguientePagina() {
    this.cargarPersonajes(this.paginaActual + 1);
  }
}
