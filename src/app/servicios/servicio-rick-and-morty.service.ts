import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

interface Ubicacion {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

interface Episodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioRickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getPersonajes(pagina?: number): Observable<{ results: Personaje[] }> {
    const url = `${this.apiUrl}/character?page=${pagina || 1}`;
    return this.http.get<{ results: Personaje[] }>(url);
  }

  getUbicaciones(pagina?: number): Observable<{ results: Ubicacion[] }> {
    const url = `${this.apiUrl}/location?page=${pagina || 1}`;
    return this.http.get<{ results: Ubicacion[] }>(url);
  }

  getEpisodios(pagina?: number): Observable<{ results: Episodio[] }> {
    const url = `${this.apiUrl}/episode?page=${pagina || 1}`;
    return this.http.get<{ results: Episodio[] }>(url);
  }
}
