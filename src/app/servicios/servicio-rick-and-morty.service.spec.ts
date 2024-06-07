import { TestBed } from '@angular/core/testing';

import { ServicioRickAndMortyService } from './servicio-rick-and-morty.service';

describe('ServicioRickAndMortyService', () => {
  let service: ServicioRickAndMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRickAndMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
