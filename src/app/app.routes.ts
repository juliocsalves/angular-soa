// import { Routes } from '@angular/router';

// export const routes: Routes = [];
// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Ajuste conforme seu caminho
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Rota padrão (Home)
  { path: 'home', component: HomeComponent }, // Rota '/home'
  { path: 'content/:id', component: ContentComponent } // Rota '/content'
];
