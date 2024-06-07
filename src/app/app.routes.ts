import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajesComponent } from './componentes/lista-personajes/lista-personajes.component';
import { ListaUbicacionesComponent } from './componentes/lista-ubicaciones/lista-ubicaciones.component';
import { ListaEpisodiosComponent } from './componentes/lista-episodios/lista-episodios.component';

export const routes: Routes = [
  { path: 'personajes', component: ListaPersonajesComponent },
  { path: 'ubicaciones', component: ListaUbicacionesComponent },
  { path: 'episodios', component: ListaEpisodiosComponent },
  { path: '', redirectTo: '/personajes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
