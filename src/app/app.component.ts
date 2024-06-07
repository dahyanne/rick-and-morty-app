import { Component, OnInit } from '@angular/core';
import { ServicioRickAndMortyService } from './servicios/servicio-rick-and-morty.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aplicación Rick and Morty';
  characters: any[] = [];

  constructor(private servicioRickAndMorty: ServicioRickAndMortyService) { }

  ngOnInit() {
    this.servicioRickAndMorty.getPersonajes().subscribe(data => {
      this.characters = data.results;
    });
  }
}
