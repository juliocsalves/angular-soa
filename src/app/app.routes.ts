// import { Routes } from '@angular/router';

// export const routes: Routes = [];
// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Ajuste conforme seu caminho

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Rota padrão (Home)
  { path: 'home', component: HomeComponent } // Rota '/home'
];
