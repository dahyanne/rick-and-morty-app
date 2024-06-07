import { Component, OnInit } from '@angular/core';
import { ServicioRickAndMortyService } from '../../servicios/servicio-rick-and-morty.service';

interface Episodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.css']
})
export class ListaEpisodiosComponent implements OnInit {
  episodios: Episodio[] = [];
  paginaActual = 1;
  haySiguientePagina = true;

  constructor(private servicioRickAndMorty: ServicioRickAndMortyService) { }

  ngOnInit() {
    this.cargarEpisodios();
  }

  cargarEpisodios(pagina?: number) {
    this.servicioRickAndMorty.getEpisodios(pagina).subscribe(respuesta => {
      this.episodios = respuesta.results;
      this.paginaActual = pagina || 1;
      this.haySiguientePagina = !!respuesta.results.length;
    });
  }

  cargarPaginaAnterior() {
    this.cargarEpisodios(this.paginaActual - 1);
  }

  cargarSiguientePagina() {
    this.cargarEpisodios(this.paginaActual + 1);
  }
}
