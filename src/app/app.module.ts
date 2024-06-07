import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; // Asegúrate de importar correctamente tus rutas
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule 
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
