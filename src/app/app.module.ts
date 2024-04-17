import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Utilizado para el enlace de datos bidireccional


import { AppComponent } from './app.component';

// Componentes
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Enrutamiento
import { AppRoutingModule } from './app-routing.module';

// Habilitando http
import { HttpClientModule } from '@angular/common/http';

// Modulo para un simular un servidor de datos
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Servicios
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
