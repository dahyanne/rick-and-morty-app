import { Component, OnInit } from '@angular/core';
import { ServicioRickAndMortyService } from '../../servicios/servicio-rick-and-morty.service';

interface Ubicacion {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

@Component({
  selector: 'app-lista-ubicaciones',
  templateUrl: './lista-ubicaciones.component.html',
  styleUrls: ['./lista-ubicaciones.component.css']
})
export class ListaUbicacionesComponent implements OnInit {
  ubicaciones: Ubicacion[] = [];
  paginaActual = 1;
  haySiguientePagina = true;

  constructor(private servicioRickAndMorty: ServicioRickAndMortyService) { }

  ngOnInit() {
    this.cargarUbicaciones();
  }

  cargarUbicaciones(pagina?: number) {
    this.servicioRickAndMorty.getUbicaciones(pagina).subscribe(respuesta => {
      this.ubicaciones = respuesta.results;
      this.paginaActual = pagina || 1;
      this.haySiguientePagina = !!respuesta.results.length;
    });
  }

  cargarPaginaAnterior() {
    this.cargarUbicaciones(this.paginaActual - 1);
  }

  cargarSiguientePagina() {
    this.cargarUbicaciones(this.paginaActual + 1);
  }
}
